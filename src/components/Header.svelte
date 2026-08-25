<header class="header">
    <h1>
        <i class="fa-solid fa-dragon"></i>
        D&D 2024 Point Buy
    </h1>

    <p>Build your character using the official 27 Point Buy system.</p>
</header>

<style>
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;

        text-align: center;

        background: linear-gradient(
            170deg,
            color-mix(in srgb, var(--surface-elevated) 88%, #000),
            color-mix(in srgb, var(--surface) 90%, #000)
        );
        border: 1px solid var(--border-soft);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-soft);
        padding: clamp(1rem, 3vw, 1.5rem);
    }

    h1 {
        margin: 0;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        color: var(--gold-strong);
        font-family: var(--font-display);
        font-size: clamp(2rem, 5vw, 3.25rem);
        font-weight: 600;
        letter-spacing: 0.02em;
        text-shadow: 0 0 30px color-mix(in srgb, var(--gold) 30%, transparent);
    }

    p {
        margin: 0;
        color: var(--text-muted);
        max-width: 52ch;
        line-height: 1.5;
    }
</style>
