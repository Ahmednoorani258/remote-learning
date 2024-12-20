import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "@/sanity/schemaTypes/eventTypes";
import { artistType } from "./artistType";
import { venueType } from "./venueType";
import { student } from "./student";
import { teacher } from "./teacher";
import { subject } from "./subject";
import { test } from "./test";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, artistType, venueType, student, teacher, subject, test],
};
