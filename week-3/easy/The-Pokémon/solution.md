# The-Pokémon

We will:

1. Take number of cards (n) from user

2. Take category/type from user

3. Use PokéAPI
  
4.Fetch Pokémon

5. Render cards dynamically

## Important PokéAPI endpoints we’ll use

Get Pokémon by ID
https://pokeapi.co/api/v2/pokemon/{id}

Get Pokémon by type (category)
https://pokeapi.co/api/v2/type/{type}

### Flow of the application

1.User selects:
 - numberOfCards
 - pokemonType
2.Call:
 - https://pokeapi.co/api/v2/type/{pokemonType}
3.From response:
 - extract Pokémon names/URLs
4.Take first N Pokémon
5.For each Pokémon:
 - fetch its full data
6.Create card UI
7.Display on screen
