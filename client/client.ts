import { Question } from "../@types/Question";

((): void => {
  let questions: Question[] = [];

  function render(): void {

    const questionEL = document.getElementById("Questions")

    if (questionEL) {
      questionEL.innerHTML = questions.map(({ title, content }) =>
      `
      <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 class="my-0">
            ${title}
          </h6>
          <small class="text-muted">
            ${content}
          </small>
        </div>
      </li>
      `).join("")
    } else {
      throw new Error('Questions element does not exist')
    }
  }

  async function init(): Promise<void> {
     
    const request = await fetch("/questions");
    questions = await request.json();
    console.log(questions);

    // debugger;

    render();
    
  }

  init();

})();