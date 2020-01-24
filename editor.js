export default class Editor {
  constructor() {
    this.editorMethods = {
      openText: () => this.executeSomething(),
      openImage: () => this.executeSomething(),
    }
  }

  executeSomething() {
    console.log('hi!')
  }

  // exemplo de implementação que demora a executar
  initializeEditor(callback) {
    setTimeout(callback(), 5000);
  }

  async getEditor() {
    return await new Promise(res => {
      this.initializeEditor(() => {
        console.log('hit resolve')
        res({ ...this.editorMethods });
      });
    });
  }

  openEditor(options) {
    this.getEditor().then(editor => editor.openText(options));
  }
}