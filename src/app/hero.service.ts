import { Injectable } from '@angular/core';
import { asyncScheduler, Observable, of, scheduled } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { Hero } from './hero-model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private readonly messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    console.log('hehehe');
    const heroes = scheduled(of(HEROES), asyncScheduler);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
