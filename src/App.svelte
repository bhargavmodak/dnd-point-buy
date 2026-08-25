<script lang="ts">
    import Header from "./components/Header.svelte";
    import ProgressBar from "./components/ProgressBar.svelte";
    import AbilityCard from "./components/AbilityCard.svelte";
    import ActionButtons from "./components/ActionButtons.svelte";
    import CostTable from "./components/CostTable.svelte";
    import Footer from "./components/Footer.svelte";

    import { abilities } from "./game/abilities";
    import { defaultScores } from "./game/defaultScores";
    import {
        MAX_SCORE,
        MIN_SCORE,
        TOTAL_POINTS,
        cost,
        modifier,
        totalCost,
    } from "./game/pointBuy";
    import type { AbilityCardModel } from "./types/abilityCard";

    type ScoreMap = typeof defaultScores;
    type ScoreKey = keyof ScoreMap;

    const standardArray = [15, 14, 13, 12, 10, 8] as const;

    let scores = $state<ScoreMap>({ ...defaultScores });

    const spentPoints = $derived(totalCost(Object.values(scores)));
    const remainingPoints = $derived(TOTAL_POINTS - spentPoints);

    const cards = $derived<AbilityCardModel[]>(
        abilities.map((definition) => {
            const key = definition.id as ScoreKey;
            const scoreValue = scores[key];
            const currentCost = cost(scoreValue);
            const nextScore = scoreValue + 1;
            const nextCost =
                nextScore <= MAX_SCORE ? cost(nextScore) : currentCost;
            const increaseDelta = nextCost - currentCost;

            return {
                definition,
                score: {
                    id: definition.id,
                    score: scoreValue,
                },
                modifier: modifier(scoreValue),
                cost: currentCost,
                canIncrease:
                    scoreValue < MAX_SCORE && increaseDelta <= remainingPoints,
                canDecrease: scoreValue > MIN_SCORE,
            };
        }),
    );

    function increaseScore(id: string): void {
        const key = id as ScoreKey;
        const current = scores[key];

        if (current >= MAX_SCORE) {
            return;
        }

        const delta = cost(current + 1) - cost(current);
        if (delta > remainingPoints) {
            return;
        }

        scores[key] = current + 1;
    }

    function decreaseScore(id: string): void {
        const key = id as ScoreKey;
        const current = scores[key];

        if (current <= MIN_SCORE) {
            return;
        }

        scores[key] = current - 1;
    }

    function resetScores(): void {
        scores = { ...defaultScores };
    }

    function applyStandardArray(): void {
        const updated: ScoreMap = { ...defaultScores };

        for (const [index, ability] of abilities.entries()) {
            const key = ability.id as ScoreKey;
            updated[key] = standardArray[index];
        }

        scores = updated;
    }
</script>

<svelte:head>
    <title>D&D 2024 Point Buy Calculator</title>
</svelte:head>

<main class="app" aria-label="Dungeons and Dragons point buy calculator">
    <Header />

    <ProgressBar remaining={remainingPoints} total={TOTAL_POINTS} />

    <section class="abilities" aria-label="Ability scores">
        {#each cards as card}
            <AbilityCard
                {card}
                onIncrease={increaseScore}
                onDecrease={decreaseScore}
            />
        {/each}
    </section>

    <ActionButtons onReset={resetScores} onStandardArray={applyStandardArray} />

    <CostTable remaining={remainingPoints} />

    <Footer />
</main>

<style>
    .app {
        width: min(1100px, 100% - 2rem);
        margin: 0 auto;
        padding: clamp(1.25rem, 3vw, 2.5rem) 0 clamp(1.5rem, 4vw, 3rem);

        display: grid;
        gap: 1.5rem;
    }

    .abilities {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
    }

    @media (max-width: 520px) {
        .app {
            width: min(1100px, 100% - 1.25rem);
        }

        .abilities {
            grid-template-columns: 1fr;
        }
    }
</style>
