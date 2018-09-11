import { DarkenHoverModule } from './darken-hover.module';

describe('DarkenHoverModule', () => {
  let darkenHoverModule: DarkenHoverModule;

  beforeEach(() => {
    darkenHoverModule = new DarkenHoverModule();
  });

  it('should create an instance', () => {
    expect(darkenHoverModule).toBeTruthy();
  });
});
