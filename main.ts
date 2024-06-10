import inquirer from "inquirer";
import chalk from "chalk";

let startTime: any, endTime: any, totalTime: any;

let registeredUsers: any = [];

async function login() {
  while (true) {
    const login = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Please Register Or sign-in First and Be Prepare To Type!",
        choices: ["Register", "Sign in", "Exit"],
      },
    ]);
    switch (login.choice) {
      case "Register":
        await handleRegistration();
        break;
      case "Sign in":
        await handleSignIn();
        break;
      case "Exit":
        console.log("BYE BYE");

        process.exit();
    }
  }
}
await login();

async function main() {
  while (true) {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose your difficulty level and prepare to type!",
        choices: [
          "Beginner",
          "Intermediate",
          "Advanced",
          "Introduction to this Game",
          "Exit",
        ],
      },
    ]);
    switch (answers.choice) {
      case "Beginner":
        console.log("************************");
        console.log("Beginner mode selected");
        console.log("*************************");
        await handleEasy();
        break;

      case "Intermediate":
        console.log("*************************");
        console.log("Intermediate Mode Selected");
        console.log("*************************");
        await hadleIntermediate();
        break;
      case "Advanced":
        console.log("*************************");
        console.log("Advanced Mode Selected");
        console.log("*************************");
        await handleAdvance();
        break;
      case "Exit":
        console.log("*************************");
        console.log("See You Soooon");
        console.log("*************************");
        process.exit();
      case "Introduction to this Game":
        console.log(
          chalk.green(
            "************************************************************************************"
          )
        );

        console.log(
          "Welcome to the TypeScript Speed Typing Tester! \nAre you ready to put your typing skills to the test? \nWhether you're a seasoned typist or just starting out, this application can help you assess your speed and accuracy. \n  \n Here's what you can expect: \n- **Challenging Passages:** Type along with a variety of sentences or passages that will test your keyboard agility. \n- **Real-Time Feedback:** See your progress as you type, with your WPM (Words Per Minute) and any errors displayed. \n- **Track Your Progress:** Over time, see how your typing speed improves with practice! '\nSo, are you ready to type like a pro? \nLet's get started!\n"
        );
        console.log(
          chalk.green(
            "************************************************************************************"
          )
        );
        break;
    }
  }
}
main();
//? function starttime
async function startTim() {
  let start = new Date();
  startTime = start.getTime();
  // console.log("Started at: "+startTime)
}
async function end() {
  let end = new Date();
  endTime = end.getTime();
}

// console.log("Ended at: "+endTime)
//***************************************************************************************** */
// !handle easy function
//***************************************************************************************** */
async function handleEasy() {
  const easy = await inquirer.prompt([
    {
      type: "list",
      name: "easy",
      message: "Choose one of these options:",
      choices: ["Start A Game", "show a sentence", "Exit"],
    },
  ]);
  if (easy.easy === "Start A Game") {
    const confirm = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "After Pressing Y , Yor time will be start ",
      },
    ]);
    if (confirm.confirm) {
      await startTim();
      console.log("Your Times Starts Now");

      const start = await inquirer.prompt([
        {
          type: "input",
          name: "easy",
          message:
            'write this:\n******************\n("please pass the salt")\n**********************:',
        },
      ]);
      let sentence = "please pass the salt".trim().split(" ");

      if (start.easy) {
        end();

        totalTime = (endTime - startTime) / 1000;
        let words = start.easy.trim().split(/\s+/);
        let num = 0;
        for (let i = 0; i < words.length; i++) {
          if (sentence[i] === words[i]) {
            num++;
          }
        }
        console.log(
          `you write ${num} corrected words out of ${sentence.length} in ${totalTime} seconds`
        );
        words = start.easy.trim().split(/\s+/).length;
        let floor = Math.floor((words / totalTime) * 60);
        console.log(`your words per minute speed is ${floor}`);
        if (num >= 4) {
          console.log(`your percentage according to your typing skill is 100%`);
        } else if (num >= 3) {
          console.log(`your percentage according to your typing skill is 75%`);
        } else if (num >= 2) {
          console.log(`your percentage according to your typing skill is 50%`);
        } else if (num >= 1) {
          console.log(`your percentage according to your typing skill is 25%`);
        } else {
          console.log(`your percentage according to your typing skill is 0%`);
        }

        return num;
      } else {
        console.log("See You Later");
        process.exit();
      }
    }
  } else if (easy.easy === "show a sentence") {
    console.log("**********************");
    console.log("Please pass the salt.");
    console.log("**********************");
    await handleEasy();
  } else {
    process.exit();
  }
}
//***************************************************************************************** */
// !handle medium function
//***************************************************************************************** */

async function hadleIntermediate() {
  const medium = await inquirer.prompt([
    {
      type: "list",
      name: "medium",
      message: "Choose one of these options:",
      choices: ["Start A Game", "show a sentence", "Exit"],
    },
  ]);
  if (medium.medium === "Start A Game") {
    const confirm = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "After Pressing Y , Yor time will be start ",
      },
    ]);
    if (confirm.confirm) {
      await startTim();
      console.log("Your Times Starts Now");

      const star = await inquirer.prompt([
        {
          type: "input",
          name: "medium",
          message:
            'write this:\n******************\n("We should remember the sacrifices made by those who came before us.")\n**********************:',
        },
      ]);
      let sentence =
        "We should remember the sacrifices made by those who came before us."
          .trim()
          .split(" ");

      if (star.medium) {
        end();

        totalTime = (endTime - startTime) / 1000;
        let word = star.medium.trim().split(/\s+/);
        let num = 0;
        for (let i = 0; i < word.length; i++) {
          if (sentence[i] === word[i]) {
            num++;
          }
        }
        console.log(
          `you write ${num} corrected words out of ${sentence.length} in ${totalTime} seconds`
        );
        word = star.medium.trim().split(/\s+/).length;
        let floor = Math.floor((word / totalTime) * 60);
        console.log(`your words per minute speed is ${floor}`);
        if (num >= 12) {
          console.log(`your percentage according to your typing skill is 100%`);
        } else if (num >= 10) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 75
            )}%`
          );
        } else if (num >= 8) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 65
            )}%`
          );
        } else if (num >= 6) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 55
            )}%`
          );
        } else if (num >= 4) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 40
            )}%`
          );
        } else if (num >= 2) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 20
            )}%`
          );
        } else if (num >= 1) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10
            )}%`
          );
        } else {
          console.log(`your percentage according to your typing skill is 0%`);
        }
        return num;
      } else {
        console.log("See You Later");
        process.exit();
      }
    }
  } else if (medium.medium === "show a sentence") {
    console.log("**********************");
    console.log(
      "We should remember the sacrifices made by those who came before us."
    );
    console.log("**********************");
    await hadleIntermediate();
  } else {
    process.exit();
  }
}

//***************************************************************************************** */
// !handle advance function
//***************************************************************************************** */

async function handleAdvance() {
  const hard = await inquirer.prompt([
    {
      type: "list",
      name: "hard",
      message: "Choose one of these options:",
      choices: ["Start A Game", "show a sentence", "Exit"],
    },
  ]);
  if (hard.hard === "Start A Game") {
    console.log(
      "----------------------------------------------------------------------------------------------"
    );

    console.log(
      "Prepare for a longer sentence with intricate wording and punctuation to push your typing skills to the limit!\n and remember this is also a case sensitive"
    );
    console.log(
      "----------------------------------------------------------------------------------------------"
    );

    const confirm = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "After Pressing Y , Yor time will be start ",
      },
    ]);
    if (confirm.confirm) {
      await startTim();
      console.log("Your Times Starts Now");

      const star = await inquirer.prompt([
        {
          type: "input",
          name: "hard",
          message:
            'write this:\n******************\n("While The Debate Surrounding The Ethical implications of Artificial Intelligence Continues to rage on, one thing is Certain: AI has the potential to Fundamentally Alter the way we live, work, and Interact with the world around pen spark")\n**********************:',
        },
      ]);
      let sentence =
        "While The Debate Surrounding The Ethical implications of Artificial Intelligence Continues to rage on, one thing is Certain: AI has the potential to Fundamentally Alter the way we live, work, and Interact with the world around pen spark"
          .trim()
          .split(" ");

      if (star.hard) {
        end();

        totalTime = (endTime - startTime) / 1000;
        let word = star.hard.trim().split(/\s+/);
        let num = 0;
        for (let i = 0; i < word.length; i++) {
          if (sentence[i] === word[i]) {
            num++;
          }
        }
        console.log(
          `you write ${num} corrected words out of ${sentence.length} in ${totalTime} seconds`
        );
        word = star.hard.trim().split(/\s+/).length;
        let floor = Math.floor((word / totalTime) * 60);
        console.log(`your words per minute speed is ${floor}`);
        if (num >= 38) {
          console.log(`your percentage according to your typing skill is 100%`);
        } else if (num >= 35) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 85
            )}%`
          );
        } else if (num >= 32) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 75
            )}%`
          );
        } else if (num >= 26) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 65
            )}%`
          );
        } else if (num >= 22) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 55
            )}%`
          );
        } else if (num >= 18) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 45
            )}%`
          );
        } else if (num >= 14) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 35
            )}%`
          );
        } else if (num >= 10) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 35
            )}%`
          );
        } else if (num >= 8) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 25
            )}%`
          );
        } else if (num >= 5) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 15
            )}%`
          );
        } else if (num >= 3) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10 + 5
            )}%`
          );
        } else if (num >= 1) {
          console.log(
            `your percentage according to your typing skill is ${Math.floor(
              Math.random() * 10
            )}%`
          );
        } else {
          console.log(`your percentage according to your typing skill is 0%`);
        }
        return num;
      } else {
        console.log("Better luck next time");
        process.exit();
      }
    }
  } else if (hard.hard === "show a sentence") {
    console.log(
      "***************************************************************************************************************************"
    );
    console.log(
      "Due to its complexity, the advanced-level sentence won't be displayed here. However, get ready for a challenge!*"
    );
    console.log(
      "***************************************************************************************************************************"
    );
    await handleAdvance();
  } else {
    process.exit();
  }
}

//*----------------------------------------------------------------------------------------------
//! FOR REGISTRATION
//*===============================================================================================
// let registeredUsers: any[] = [];
async function handleRegistration() {
  const newUser = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: chalk.grey("Enter Your Name"),
      validate: function (value) {
        if (value.length == 0) {
          return chalk.red("Please Enter A Valid Name.");
        }
        return true;
      },
    },
    {
      type: "input",
      name: "email",
      message: chalk.grey("Enter Your Email:"),
      validate: function (value) {
        if (!/\S+@\S+\.\S+/.test(value)) {
          return chalk.red("Please enter a valid email address.");
        }
        return true;
      },
    },
    {
      type: "number",
      name: "number",
      message: chalk.grey("Enter Your Phone Number (Do not write first 0):"),
      validate: function (value) {
        if (isNaN(value) || value.toString().length !== 10) {
          return chalk.red("Please enter a valid phone number (10 digits).");
        }
        return true;
      },
    },
    {
      type: "password",
      name: "password",
      message: chalk.grey("Enter Your Password:"),
      validate: function (value) {
        if (value.length == 0) {
          return chalk.red("Please Enter A Valid Name.");
        }
        return true;
      },
    },
  ]);

  // Check for existing username or email
  if (
    registeredUsers.some(
      (user: any) => user.name === newUser.name || user.email === newUser.email
    )
  ) {
    console.log(
      chalk.yellow(
        "\nThat name or email is already taken. Please choose another.\n"
      )
    );
    return; // Exit registration if name or email exists
  }

  registeredUsers.push(newUser); // Store user information in the array
  console.log(
    chalk.yellow(
      "*****************************************************************************"
    )
  );
  console.log(
    chalk.green(
      ` 
Welcome aboard, ${newUser.name}! The Speed Typing Tester is ready!`
    )
  );
  console.log(
    chalk.yellow(
      "*****************************************************************************"
    )
  );

  console.log("***************************");
  console.log("Only One Step Left To Move Further");

  console.log("Please Sign In");
  console.log("***************************");

  await handleSignIn();

  //*----------------------------------------------------------------------------------------------
  //! FOR SIGN IN
  //*===============================================================================================

  var user: any = [];
  user.push(newUser);
  var pass: any = [];
  pass.push(newUser);
}
async function handleSignIn() {
  const signIn = await inquirer.prompt([
    {
      type: "confirm",
      name: "choices",
      message: chalk.grey("Do you wanna Sign in:"),
    },
  ]);

  if (signIn.choices) {
    const login = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: chalk.grey("Enter Your Name"),
        validate: function (value) {
          if (value.length == 0) {
            return chalk.red("Please Enter A Valid Name.");
          }
          return true;
        },
      },
      {
        type: "password",
        name: "password",
        message: chalk.grey("Enter Your Password:"),
        validate: function (value) {
          if (value.length == 0) {
            return chalk.red("Please Enter A Valid Name.");
          }
          return true;
        },
      },
    ]);

    const foundUser = registeredUsers.find(
      (user: any) => user.name === login.name
    ); // Find user by name in registeredUsers

    if (foundUser && foundUser.password === login.password) {
      // Check both name and password
      console.log(chalk.green("Login Successful!"));
      await main();
    } else {
      console.log(
        chalk.red("Login Failed!\nPlease check your username and password.")
      );
      await handleSignIn();
    }
  } else {
    await login();
  }
}
