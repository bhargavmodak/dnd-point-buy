<script lang="ts">
    interface Props {
        onReset: () => void;
        onStandardArray: () => void;
    }

    let { onReset, onStandardArray }: Props = $props();
</script>

<section class="actions" aria-label="Point buy actions">
    <button type="button" class="ghost" onclick={onReset}>
        <i class="fa-solid fa-rotate-left"></i>

        Reset
    </button>

    <button type="button" class="solid" onclick={onStandardArray}>
        <i class="fa-solid fa-list"></i>

        Standard Array
    </button>
</section>

<style>
    .actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem;
    }

    button {
        border-radius: 12px;
        border: 1px solid var(--gold-dim);
        padding: 0.8rem 1rem;
        font-size: 0.95rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        cursor: pointer;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.55rem;

        transition:
            transform 150ms ease,
            filter 150ms ease,
            background-color 150ms ease;
    }

    button:hover {
        transform: translateY(-1px);
        filter: brightness(1.08);
    }

    .ghost {
        background: color-mix(in srgb, var(--surface-elevated) 88%, #000);
        color: var(--text);
    }

    .solid {
        background: linear-gradient(
            120deg,
            color-mix(in srgb, var(--gold) 78%, #7b6327),
            var(--gold-strong)
        );
        color: #261b06;
        border-color: color-mix(in srgb, var(--gold-strong) 75%, #6d5621);
    }

    @media (max-width: 560px) {
        .actions {
            grid-template-columns: 1fr;
        }
    }
</style>
