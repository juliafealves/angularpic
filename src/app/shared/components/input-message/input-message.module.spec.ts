import { InputMessageModule } from './input-message.module';

describe('InputMessageModule', () => {
  let inputMessageModule: InputMessageModule;

  beforeEach(() => {
    inputMessageModule = new InputMessageModule();
  });

  it('should create an instance', () => {
    expect(inputMessageModule).toBeTruthy();
  });
});
