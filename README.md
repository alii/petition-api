# `petition-api`

![Forks](https://img.shields.io/github/forks/alii/petition-api)
![Stars](https://img.shields.io/github/stars/alii/petition-api)

### A simple API for accessing the UK's petitions service.

#### Usage

```typescript
import { api } from "petition-api";

// (optionally set the base URL for all requests)
// api.base_api = "";

const petitions = await api.all();

const first = petitions[0];

const detailedPetition = await api.one(first.id);

console.log(`Found ${petitions.length} petitions.`);
console.log({ detailedPetition });
```
