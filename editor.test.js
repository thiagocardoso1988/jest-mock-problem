/**
 * @jest-environment jsdom
 */

import Editor from './editor';

describe('test', () => {
  it('', done => {
    const mockOpenText = jest.fn().mockImplementation(() => console.log('hit mockOpenText'))
    const mockEditorFunctions = {
      openText: mockOpenText
    }
    const subject = new Editor();
    jest.spyOn(subject, 'getEditor').mockImplementation(() => Promise.resolve(mockEditorFunctions))
    // 
    subject.openEditor({})

    console.log(mockOpenText.mock);
    return subject.getEditor().then( () => {
      expect(mockOpenText).toHaveBeenCalled();
      done();
    });
  });
})