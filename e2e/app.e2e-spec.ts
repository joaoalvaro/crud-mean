import { CrudMeanPage } from './app.po';

describe('crud-mean App', () => {
  let page: CrudMeanPage;

  beforeEach(() => {
    page = new CrudMeanPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
