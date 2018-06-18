import { SushiLoginModule } from './sushi-login.module';

describe('SushiLoginModule', () => {
  let sushiLoginModule: SushiLoginModule;

  beforeEach(() => {
    sushiLoginModule = new SushiLoginModule();
  });

  it('should create an instance', () => {
    expect(sushiLoginModule).toBeTruthy();
  });
});
