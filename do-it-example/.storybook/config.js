import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/InputStory');
  // InputStory.jsx 파일을 loadStories() 함수 안에서 require()함수로 임포트 했습니다.
  // 즉, Input 스토리를 스토리북에 연결 했습니다.

  // 스토리 파일을 이곳에 추가할 수 있습니다.
}

configure(loadStories, module);
