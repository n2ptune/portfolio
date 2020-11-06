# Portfolio

신입 프론트엔드 개발자 포트폴리오

## Environment

**Nuxt**(generate)와 **TailwindCSS로** 만들었습니다. 모든 페이지 단위는 뷰포트의 최대 넓이/높이를 가지는 풀 페이지로 구성했으며 드래그 혹은 마우스 휠로 페이지를 옮길 수 있습니다. 빌드된 정적 파일들을 **Vercel**에 배포했습니다.

## Project

포트폴리오에 업로드 한 직접 만든 프로젝트의 리스트입니다.

1. **한국외식음료협회 웹 개발**

대학교 재학 당시, 현장 실습(산학 협력) 활동으로 웹 개발 부분을 맡겨주셔서 페이지 리뉴얼, 기능 개발, 유지보수 등 다양한 작업을 했습니다. 해당 페이지는 정해진 규칙의 엑셀 표에 수검생 정보가 들어가 있어, 이 정보를 관리자 페이지에 하나씩 옮겨서 직접 수검생의 시험 점수, 합격 여부 등을 체크하거나 수검생 정보를 하나씩 입력하여 해당 자격증 시험에 예약시키곤 했습니다.

이 부분을 회사가 사용하는 기술 중 하나인 ASP를 단기간 내에 빠르게 습득하여 엑셀을 파싱해서 직접 입력하지 않아도 자동으로 데이터베이스에 넣는 기능을 개발했습니다.

그 외에도 수검생 정보를 출력해야 하는 상황에서, 기존에는 하나씩 수검생 페이지를 들어가 출력해야 했지만 수검생 리스트 페이지에서 리스트에 있는 수검생들의 정보를 일괄적으로 출력하는 기능을 간단히 DOM을 이어 붙여 개발하는 등 업무에 효율성을 증대하는 기능들을 개발했습니다.

실습 활동이 끝나고 나서도 외주 형태로 사용자 페이지 리뉴얼, 자잘한 버그/편의 기능 수정, 요구 사항을 적용시켰습니다.

이 개발 활동으로 누군가에게 편의성을 제공한다는 점에서 웹 개발에 크게 매력을 느꼈으며, 단기간 내에 배운 지식을 실제 운영중인 페이지에 적용시키고 그 후에 좀 더 코드를 간결하게 작성한다던지, 가독성이 더 좋게 코드를 리팩토링 하는 과정에서 재미를 느꼈습니다.

[한국외식음료협회](http://kfba.or.kr)

2. **Fairy**

Fairy라는 이름은 웹 페이지의 작은 요정이라는 뜻에서 지었습니다. 웹 페이지를 개발하면서 문득 드는 생각이, 만약 내가 만든 기능을 사용자가 제대로 사용하지 못한다면 그것만큼 아쉬울 때가 없을 것 같아 사용자에게 이러한 내용을 직관적으로, 그러면서도 UI를 해치지 않는 방법을 생각하다 개발하게 되었습니다.

형태는 어떤 페이지에서나 삽입시킬 수 있는 형태로 만들었습니다. [채널톡](https://channel.io/ko) 혹은 [Help Scout](https://www.helpscout.com/) 같이 페이지 우측 하단에 이모티콘 같은 Element를 삽입시키는 형태에 영감을 받아 제작하였습니다.

개발하는 데에 페이지에 삽입시킬 App과, App의 정보를 만들거나 관리할 수 있는 사용자 페이지, App에서 정보를 가져오기 위해 서버가 필요했습니다. App과 사용자 페이지는 모두 Vue로 구성했고 서버는 Node.js와 Express를 이용했습니다. App의 정보를 담아두기 위해 Firestore를 사용했습니다.

주요 기능은 컨텐츠를 보여주거나 사용자로부터 메세지를 받아 페이지에서 관리할 수 있는 기능입니다. 마크다운을 이용해 컨텐츠를 작성하고 나머지 App의 정보를 작성하면 사용자 페이지에서 HTML에 삽입할 수 있는 코드를 생성합니다. App을 사용할 페이지에 해당 코드를 삽입하면 우측 하단에 App이 표시되는 방식으로 동작합니다.

<p align="center">
  <img src="/docs/ex.gif" alt="example-fairy" />
</p>

[Fairy Web](https://fairy-web-service.web.app/) | [Fairy Github](https://github.com/n2ptune/fairy)

3. **Shaft**

4. **개발 블로그**

## Profile
