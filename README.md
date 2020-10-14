# Coding Challenges

Coding challenges are from Daily Coding Challenge. Descriptions are contained in the same file as the solution: `main.ts`.

## Creating Challenge Folders 📁

When creating a challenge folder follow the proper folder structure:

- **Add folder to root with name**: c[YYYYmmDD]
  - **Add files to challenge folder**: `main.spec.ts`, `main.ts`, `tsconfig.ts`
  - **Copy the contents of a tsconfig in another challenge and paste it into the new challenge**
  - **In the `main.ts` file, add the description of the challenge**
  - **Write your unit tests according to the requirements of the challenge**
  - **Run the `test.watch` npm script as you write your solution**

## Compiling the specific project with watch

In a new terminal window, from the root directory run the commmand:

```cmd
npm start -- -p [your-challenge-folder]
```

## Running unit tests while writing your solution

In a terminal window, from the root directory run the test command:

```cmd
npm test
```

> **NOTE:** The Babel config in the project root also allows you to run Quokka.js in VSCode while you are writing your solution
