import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from './Modal.jsx';


class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        email: "",
        name: {
          firstName: "",
          lastName: ""
        },
        yearMonthDate: "",
        answers: {
          ans1: "",
          ans2: "",
          ans3: "",
          ans4: "",
          ans5: "",
          ans6: "",
          ans7: "",
          ans8: "",
          ans9: "",
          ans10: "",
          ans11: "",
          ans12: "",
          ans13: "",
          ans14: "",
          ans15: "",
          ans16: "",
          ans17: "",
          ans18: "",
          ans19: "",
          ans20: ""
        }
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onValueChange(event) {
    let answers = this.state.answers;
    let name = this.state.name;
    let email = this.state.email;
    
    if(event.target.name === "ans1") {
      answers.ans1 = event.target.value;
    }else if(event.target.name === "ans2") {
      answers.ans2 = event.target.value;
    }else if(event.target.name === "ans3") {
      answers.ans3 = event.target.value;
    }else if(event.target.name === "ans4") {
      answers.ans4 = event.target.value;
    }else if(event.target.name === "ans5") {
      answers.ans5 = event.target.value;
    }else if(event.target.name === "ans6") {
      answers.ans6 = event.target.value;
    }else if(event.target.name === "ans7") {
      answers.ans7 = event.target.value;
    }else if(event.target.name === "ans8") {
      answers.ans8 = event.target.value;
    }else if(event.target.name === "ans9") {
      answers.ans9 = event.target.value;
    }else if(event.target.name === "ans10") {
      answers.ans10 = event.target.value;
    }else if(event.target.name === "ans11") {
      answers.ans11 = event.target.value;
    }else if(event.target.name === "ans12") {
      answers.ans12 = event.target.value;
    }else if(event.target.name === "ans13") {
      answers.ans13 = event.target.value;
    }else if(event.target.name === "ans14") {
      answers.ans14 = event.target.value;
    }else if(event.target.name === "ans15") {
      answers.ans15 = event.target.value;
    }else if(event.target.name === "ans16") {
      answers.ans16 = event.target.value;
    }else if(event.target.name === "ans17") {
      answers.ans17 = event.target.value;
    }else if(event.target.name === "ans18") {
      answers.ans18 = event.target.value;
    }else if(event.target.name === "ans19") {
      answers.ans19 = event.target.value;
    }else if(event.target.name === "ans20") {
      answers.ans20 = event.target.value;
    }else if(event.target.name === "firstName") {
      name.firstName = event.target.value;
    }else if(event.target.name === "lastName") {
      name.lastName = event.target.value;
    }else if(event.target.name === "email") {
      email = event.target.value;
    }

    this.setState({ name: name, answers: answers, email: email }, function() {
      // console.log(this.state);
    })
  };

  async formSubmit(event) {
    event.preventDefault();
    const answers = this.state.answers;
    const name = this.state.name;
    const email = this.state.email;
    const showDate = new Date();
    const yearMonthDate = showDate.getDate() + '/'+ (showDate.getMonth()+1) + '/' + showDate.getFullYear();
    console.log(yearMonthDate);
    console.log(showDate);
    console.log(name);
    console.log(answers);
    console.log(email);
    await fetch("http://localhost:8080/getSurvey", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, answers, email, yearMonthDate }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }
  
  

    render() { 
          
        return (
          <div> 
            

            <form onSubmit={this.formSubmit}>

            <label><dt>First name</dt><input type="text" name="firstName" onChange={this.onValueChange} className="input-group-text"/></label>
            <label><dt>Last name</dt><input type="text" name="lastName"  onChange={this.onValueChange} className="input-group-text"/></label>
            <label><dt>email</dt><input type="text" name="email"  onChange={this.onValueChange} className="input-group-text"/></label>
            

              <p className="d-block p-2 bg-info text-white"><dt>1. How often do you feel that you are "in tune" with the people around you?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans1" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans1 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans1" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans1 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans1" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans1 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans1" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans1 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>
             
              <p className="d-block p-2 bg-info text-white"><dt>2. How often do you feel that you lack companionship?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans2" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans2 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans2" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans2 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans2" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans2 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans2" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans2 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>3. How often do you feel that there is no one you can turn to?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans3" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans3 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans3" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans3 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans3" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans3 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans3" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans3 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>4. How often do you feel alone?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans4" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans4 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans4" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans4 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans4" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans4 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans4" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans4 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>5. How often do you feel part of a group of friends?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans5" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans5 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans5" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans5 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans5" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans5 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans5" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans5 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>
              
              <p className="d-block p-2 bg-info text-white">
                <dt>6. How often do you feel that you have a lot in common with the people around you?</dt> 
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans6" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans6 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans6" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans6 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans6" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans6 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans6" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans6 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>7. How often do you feel that you are no longer close to anyone?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans7" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans7 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans7" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans7 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans7" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans7 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans7" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans7 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white">
                <dt>8. How often do you feel that your interests and ideas are not shared by those around you?</dt> 
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans8" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans8 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans8" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans8 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans8" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans8 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans8" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans8 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>9. How often do you feel outgoing and friendly?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans9" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans9 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans9" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans9 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans9" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans9 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans9" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans9 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>10. How often do you feel close to people?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans10" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans10 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans10" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans10 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans10" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans10 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans10" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans10 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>11. How often do you feel left out?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans11" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans11 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans11" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans11 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans11" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans11 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans11" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans11 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white">
                <dt>12. How often do you feel that your relationships with others are not meaningful?</dt> 
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans12" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans12 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans12" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans12 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans12" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans12 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans12" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans12 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>13. How often do you feel that no one really knows you we11?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans13" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans13 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans13" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans13 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans13" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans13 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans13" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans13 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>14. How often do you feel isolated from others?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans14" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans14 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans14" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans14 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans14" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans14 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans14" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans14 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white">
                <dt>15. How often do you feel you can find companionship when you want it?</dt>
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans15" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans15 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans15" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans15 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans15" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans15 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans15" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans15 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white">
                <dt>16.  How often do you feel that there are people who really understand you?</dt> 
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans16" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans16 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans16" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans16 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans16" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans16 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans16" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans16 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white"><dt>17. How often do you feel shy?</dt></p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans17" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans17 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans17" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans17 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans17" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans17 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans17" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans17 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white">
                <dt>18. How often do you feel that people are around you but not with you?</dt>
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans18" 
                  id="inlineRadio1" value="1" 
                  checked={this.state.answers.ans18 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans18" 
                  id="inlineRadio2" value="2" 
                  checked={this.state.answers.ans18 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans18" 
                  id="inlineRadio3" value="3" 
                  checked={this.state.answers.ans18 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans18" 
                  id="inlineRadio4" value="4" 
                  checked={this.state.answers.ans18 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white">
                <dt>19. How often do you feel that there are people you can talk to?</dt>  
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans19" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans19 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans19" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans19 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans19" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans19 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans19" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans19 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

              <p className="d-block p-2 bg-info text-white">
                <dt>20. How often do you feel that there are people you can turn to?</dt>   
              </p>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans20" 
                  id="inlineRadio1" value="4" 
                  checked={this.state.answers.ans20 === "4"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio1"><dt class="text-muted">Never</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans20" 
                  id="inlineRadio2" value="3" 
                  checked={this.state.answers.ans20 === "3"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio2"><dt class="text-muted">Rarely</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans20" 
                  id="inlineRadio3" value="2" 
                  checked={this.state.answers.ans20 === "2"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio3"><dt class="text-muted">Sometimes</dt></label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" name="ans20" 
                  id="inlineRadio4" value="1" 
                  checked={this.state.answers.ans20 === "1"}
                  onChange={this.onValueChange}
                />
                <label className="form-check-label" for="inlineRadio4"><dt class="text-muted">Often</dt></label>
              </div>

             

              <br></br>
              <button className="btn btn-primary" type="submit" onClick={this.showModal}>
                Submit
              </button>
            </form>
            <Modal show={this.state.show} handleClose={this.hideModal} handleOpen={this.showModal} answers={this.state.answers}>
              <h1 className="text-success">Your Score!</h1>
            </Modal>
            {/* <button type="button" onClick={this.showModal}>
              Open
            </button> */}
          </div>
        );
    }
}
 
export default Radio;