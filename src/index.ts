import fetch from "node-fetch";

import { AllPetitionsRequest, DetailedPetition, Petition, SinglePetitionRequest } from "./interfaces";
export * from "./interfaces";

export class PetitionsAPI {
  base_api = "https://petition.parliament.uk/petitions";

  all(): Promise<Petition[]> {
    return fetch(this.base_api + `.json`)
      .then((res) => res.json())
      .then((body: AllPetitionsRequest) => {
        return body.data;
      });
  }

  one(id: Petition["id"]): Promise<DetailedPetition> {
    return fetch(this.base_api + `/${id}.json`)
      .then((res) => res.json())
      .then((body: SinglePetitionRequest) => {
        return {
          attributes: body.data.attributes,
          type: body.data.type,
          id: body.data.id,
          links: body.links,
        };
      });
  }

  async ids(petitions?: Petition[]): Promise<Petition["id"][]> {
    petitions = petitions?.length ? petitions : await this.all();
    return petitions.map((p) => p.id);
  }
}

export const api = new PetitionsAPI();
