export interface Inhabitant {
  isRegisteredVoter: boolean;
}

export interface Household {
  inhabitants: Inhabitant[];
  householdUuid: string;
}
