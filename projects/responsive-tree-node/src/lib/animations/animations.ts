import { animate, state, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0
  }),
  animate('0.2s ease-in', style({
    opacity: 1
  }))
]);

const leaveTrans = transition(':leave', [
  style({
    opacity: 1
  }),
  animate('0.2s ease-out', style({
    opacity: 0
  }))
]);

export const fadeIn = trigger('fadeIn', [
  enterTransition
]);

export const fadeOut = trigger('fadeOut', [
  leaveTrans
]);

export const rotate = trigger('rotatedState', [
  state('true', style({ transform: 'rotate(0)' })),
  state('false', style({ transform: 'rotate(-90deg)' })),
  transition('false => true', animate('100ms ease-out')),
  transition('true => false', animate('100ms ease-in'))
]);
