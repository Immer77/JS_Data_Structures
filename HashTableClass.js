
// Eksporter så jeg kan bruge den i tests
export default class HashTable {

    // Constructor der har et limit på 10 (Som vi også bruger til at hashe)
    constructor() {
        // Storage er i initialiseringen af det hele en tom liste
      this.storage = [];
      this.storageLimit = 10;
    }
  
    // Hash function til at hashe det 
    hash(inputHash, max) {
      let hash = 0;
      for (let i = 0; i < inputHash.length; i++) {
        hash = (hash * 33 + inputHash.charCodeAt(i)) % max;
      }
      return hash;
    }
  
    // Tilføj til hash table
    add(key, value) {
        // Vi hasher og sætter vores storagelimit ind her fordi vi ikke vil have en hashværdi der overgår den.
      const index = this.hash(key, this.storageLimit);
      // Tjekker om der er noget på pladsen i forvejen.
      const bucket = this.storage[index];
  
      // Hvis ikke så tilføjer den vores key value pair til storage
      if (!bucket) {
        this.storage[index] = [[key, value]];
      } else {
        let inserted = false;
        // Vi tilføjer derefter til den plads i bucket Dette eksempel er taget med udgangspunkt i lukket addressering
        // Det vil sige at vi følger kædestrukturen og der kan godt være flere på samme plads.
        for (let i = 0; i < bucket.length; i++) {
            // Hvis keyen indeholder det samme, tilføjer vi bare en værdi mere.
          if (bucket[i][0] === key) {
            bucket[i][1] = value;
            inserted = true;
            break;
          }
        }
        // Hvis ikke så skubber vi den bare ind
        if (!inserted) {
          bucket.push([key, value]);
        }
      }
    }
  
    remove(key) {
        // Hasher
        const index = this.hash(key, this.storageLimit);
        const bucket = this.storage[index];
        // Hvis bucket ikke er null eller undefined, betyder det at der er noget på dens plads
        if (bucket) {
            // Løber igennem eftersom vi har lukket adressing og tjekker om der er flere ting på pladsen kædet sammen
            for (let i = 0; i < bucket.length; i++) {
                // Finder vi key, splicer vi den så den ryger ud af vores liste.
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    break;
                }
            }
        }
    }
  
    // Lookup til at finde value på den key der bliver indsat
    lookup(key) {
        // Samme som de 2 foregående metoder    
        const index = this.hash(key, this.storageLimit);
        const bucket = this.storage[index];
  
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }
  }
  