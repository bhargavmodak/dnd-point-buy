import type { AbilityDefinition } from "../types/ability";

export const abilities: AbilityDefinition[] = [
    {
        id: "str",
        name: "Strength",
        short: "STR",
        icon: "fa-hand-fist",
    },
    {
        id: "dex",
        name: "Dexterity",
        short: "DEX",
        icon: "fa-person-running",
    },
    {
        id: "con",
        name: "Constitution",
        short: "CON",
        icon: "fa-heart",
    },
    {
        id: "int",
        name: "Intelligence",
        short: "INT",
        icon: "fa-brain",
    },
    {
        id: "wis",
        name: "Wisdom",
        short: "WIS",
        icon: "fa-eye",
    },
    {
        id: "cha",
        name: "Charisma",
        short: "CHA",
        icon: "fa-comments",
    },
];
