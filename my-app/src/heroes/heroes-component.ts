import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';
export class HeroesComponent {
    heroes = HEROES;
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}