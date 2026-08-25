import type { AbilityDefinition, AbilityValue } from "./ability";

export interface AbilityCardModel {
    definition: AbilityDefinition;

    score: AbilityValue;

    modifier: number;

    cost: number;

    canIncrease: boolean;

    canDecrease: boolean;
}
