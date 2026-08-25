<script lang="ts">
    import type { AbilityCardModel } from "../types/abilityCard";

    interface Props {
        card: AbilityCardModel;
        onIncrease: (id: string) => void;
        onDecrease: (id: string) => void;
    }

    let { card, onIncrease, onDecrease }: Props = $props();
</script>

<section class="card" aria-label={`${card.definition.name} score card`}>
    <header>
        <i class={`fa-solid ${card.definition.icon}`}></i>

        <div>
            <h2>{card.definition.name}</h2>

            <small>{card.definition.short}</small>
        </div>
    </header>

    <div class="score">
        <button
            type="button"
            disabled={!card.canDecrease}
            onclick={() => onDecrease(card.score.id)}
            aria-label={`Decrease ${card.definition.name}`}
        >
            −
        </button>

        <output aria-live="polite" aria-atomic="true">{card.score.score}</output
        >

        <button
            type="button"
            disabled={!card.canIncrease}
            onclick={() => onIncrease(card.score.id)}
            aria-label={`Increase ${card.definition.name}`}
        >
            +
        </button>
    </div>

    <footer>
        <div>
            <span>Modifier</span>

            <strong>
                {card.modifier >= 0 ? "+" : ""}{card.modifier}
            </strong>
        </div>

        <div>
            <span>Cost</span>

            <strong>{card.cost}</strong>
        </div>
    </footer>
</section>

<style>
    .card {
        background: var(--surface-elevated);
        border: 1px solid var(--border-soft);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-soft);
        padding: 1rem;

        display: grid;
        gap: 1rem;

        transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
    }

    .card:hover {
        transform: translateY(-2px);
        border-color: color-mix(in srgb, var(--gold) 38%, var(--border-soft));
        box-shadow: var(--shadow-elevated);
    }

    header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    i {
        font-size: 1.15rem;
        color: var(--gold-strong);
        width: 1.25rem;
        text-align: center;
    }

    h2 {
        margin: 0;
        font-family: var(--font-heading);
        font-size: 1.15rem;
        letter-spacing: 0.02em;
    }

    small {
        color: var(--text-muted);
        letter-spacing: 0.08em;
        font-weight: 600;
    }

    .score {
        display: grid;
        grid-template-columns: 44px 1fr 44px;
        align-items: center;
        gap: 0.5rem;
    }

    button {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        border: 1px solid var(--gold-dim);
        background: color-mix(in srgb, var(--surface) 82%, #000);
        color: var(--gold);
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
        transition:
            background-color 150ms ease,
            transform 120ms ease,
            border-color 150ms ease;
    }

    button:hover:enabled {
        background: color-mix(in srgb, var(--surface) 55%, var(--gold));
        border-color: var(--gold);
        transform: scale(1.03);
    }

    button:disabled {
        color: var(--text-faint);
        border-color: var(--border-soft);
        cursor: not-allowed;
    }

    output {
        text-align: center;
        font-family: var(--font-display);
        font-size: 2rem;
        line-height: 1;
        color: var(--gold-strong);
        text-shadow: 0 0 24px color-mix(in srgb, var(--gold) 35%, transparent);
    }

    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
        color: var(--text-muted);
        font-size: 0.9rem;
    }

    footer > div {
        background: color-mix(in srgb, var(--surface) 72%, #000);
        border: 1px solid var(--border-soft);
        border-radius: 10px;
        padding: 0.55rem 0.65rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        font-size: 1rem;
        color: var(--text);
    }
</style>
