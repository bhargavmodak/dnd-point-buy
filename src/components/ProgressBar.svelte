<script lang="ts">
    interface Props {
        remaining: number;
        total: number;
    }

    let { remaining, total }: Props = $props();

    const spent = $derived(total - remaining);
    const progressPercent = $derived((remaining / total) * 100);
    const progressClass = $derived(
        remaining === total
            ? "complete"
            : remaining <= 5
              ? "warning"
              : "normal",
    );
</script>

<section class="progress-card">
    <div class="top">
        <span>Points Remaining</span>

        <strong aria-live="polite" aria-atomic="true"
            >{remaining} / {total}</strong
        >
    </div>

    <div
        class={`bar ${progressClass}`}
        role="progressbar"
        aria-label="Point budget remaining"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={remaining}
    >
        <span style={`width: ${progressPercent}%`}></span>
    </div>
</section>

<style>
    .progress-card {
        background: color-mix(in srgb, var(--surface-elevated) 90%, #000);
        border: 1px solid var(--border-soft);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-soft);
        padding: 1rem;
        display: grid;
        gap: 0.75rem;
    }

    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    }

    span {
        color: var(--text-muted);
        font-weight: 500;
    }

    strong {
        font-size: 1.15rem;
        color: var(--text);
    }

    .bar {
        height: 12px;
        border-radius: 999px;
        overflow: hidden;
        background: color-mix(in srgb, var(--surface) 82%, #000);
        border: 1px solid var(--border-soft);
    }

    .bar > span {
        display: block;
        height: 100%;
        width: 0%;
        border-radius: 999px;
        transition:
            width 240ms cubic-bezier(0.16, 1, 0.3, 1),
            background-color 200ms ease;
        background: linear-gradient(
            90deg,
            color-mix(in srgb, var(--gold) 80%, #b08f36),
            var(--gold-strong)
        );
    }

    .bar.warning > span {
        background: linear-gradient(90deg, #ca8f35, #f0ad4e);
    }

    .bar.complete > span {
        background: linear-gradient(90deg, #4f9f61, #66bd7a);
    }
</style>
