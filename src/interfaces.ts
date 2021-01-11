export interface AllPetitionsRequest {
  links: Links;
  data: Petition[];
}

export interface SinglePetitionRequest {
  links: Links;
  data: DetailedPetitionData;
}

export interface DetailedPetitionData {
  type: string;
  id: number;
  attributes: DetailedPetitionAttributes;
}

export interface Links {
  self: string;
  first: string | null;
  last: string | null;
  next: string | null;
  prev: string | null;
}

export interface Petition {
  type: string;
  id: number;
  links: PetitionLinks;
  attributes: PetitionAttributes;
}

export interface DetailedPetition extends Petition {
  attributes: DetailedPetitionAttributes;
}

export interface PetitionLinks {
  self: string;
}

export interface PetitionAttributes {
  action: string;
  background: string;
  additional_details: string;
  committee_note?: string;
  state: string;
  signature_count: number;
  created_at: string;
  updated_at: string;
  rejected_at: string;
  opened_at: string;
  closed_at?: string;
  moderation_threshold_reached_at: string;
  response_threshold_reached_at: string;
  government_response_at?: string;
  debate_threshold_reached_at: string;
  scheduled_debate_date?: string;
  debate_outcome_at?: string;
  creator_name?: string;
  rejection: boolean;
  government_response?: GovernmentResponse;
  debate?: Debate;
  departments: Department[];
  topics: string[];
}

export interface DetailedPetitionAttributes extends PetitionAttributes {
  signatures_by_country: SignaturesByCountry[];
  signatures_by_constituency: SignaturesByConstituency[];
  signatures_by_region: SignaturesByRegion[];
}

export interface SignaturesByCountry {
  name: string;
  code: string;
  signature_count: number;
}

export interface SignaturesByConstituency {
  name: string;
  ons_code: string;
  mp: string;
  signature_count: number;
}

export interface SignaturesByRegion {
  name: string;
  ons_code: string;
  signature_count: number;
}

export interface GovernmentResponse {
  responded_on: string;
  summary: string;
  details: string;
  created_at: string;
  updated_at: string;
}

export interface Debate {
  debated_on?: string;
  transcript_url: string;
  video_url: string;
  debate_pack_url: string;
  overview: string;
}

export interface Department {
  acronym: string;
  name: string;
  url: string;
}
