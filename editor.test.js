/**
 * @jest-environment jsdom
 */

import Editor from './editor';

describe('test', () => {
  it('', () => {
    const mockOpenText = jest.fn().mockImplementation(() => console.log('hit mockOpenText'))
    const mockEditorFunctions = {
      openText: mockOpenText
    }
    const subject = new Editor();
    jest.spyOn(subject, 'getEditor').mockImplementation(() => Promise.resolve(mockEditorFunctions))
    // subject.getEditor().then(console.log)
    subject.openEditor({})

    console.log(mockOpenText.mock);
    expect(mockOpenText).toHaveBeenCalled();
  });
})