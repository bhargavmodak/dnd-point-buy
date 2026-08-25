<script lang="ts">
    import { COSTS } from "../game/pointBuy";

    interface Props {
        remaining: number;
    }

    let { remaining }: Props = $props();

    const entries = Object.entries(COSTS).map(([score, points]) => ({
        score: Number(score),
        points,
    }));
</script>

<section class="costs" aria-label="Point buy cost table">
    <h2>Point Buy Costs</h2>

    <table>
        <thead>
            <tr>
                <th>Score</th>

                <th>Cost</th>
            </tr>
        </thead>

        <tbody>
            {#each entries as entry}
                <tr class:affordable={entry.points <= remaining}>
                    <td>{entry.score}</td>

                    <td>{entry.points}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>

<style>
    .costs {
        background: color-mix(in srgb, var(--surface-elevated) 90%, #000);
        border: 1px solid var(--border-soft);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-soft);
        padding: 1rem;
    }

    h2 {
        margin: 0 0 0.8rem;
        font-family: var(--font-heading);
        font-size: 1.2rem;
        letter-spacing: 0.02em;
        color: var(--gold);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
        border-radius: 10px;
    }

    th,
    td {
        padding: 0.65rem 0.75rem;
        text-align: left;
        border-bottom: 1px solid var(--border-soft);
    }

    th {
        color: var(--text-muted);
        font-weight: 600;
    }

    tbody tr {
        color: var(--text-faint);
        transition:
            background-color 140ms ease,
            color 140ms ease;
    }

    tbody tr.affordable {
        color: var(--text);
        background: color-mix(in srgb, var(--surface) 80%, #000);
    }

    tbody tr:last-child td {
        border-bottom: 0;
    }
</style>
