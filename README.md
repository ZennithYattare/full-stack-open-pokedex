# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

---

## About This Project

This project is part of the **Full Stack Open** course, focusing on **Continuous Integration and Continuous Deployment (CI/CD)**. The objective is to automate the development workflow by setting up CI/CD pipelines using GitHub Actions. This ensures efficient code testing, automated builds, and seamless deployments.

Unlike other projects in the course, this module emphasizes configuration rather than extensive coding. The primary goal is to understand, set up, and optimize CI/CD pipelines.

## CI/CD Pipelines

This project includes a CI/CD pipeline configured using **GitHub Actions**, which performs the following tasks:

- Linting the code  
- Running unit tests  
- Building the application  
- Running end-to-end tests  
- Deploying the application  

The workflow file can be found at `.github/workflows/pipeline.yml`.

### Deployment  

The application is deployed and can be accessed here:  
🔗 **[Live Demo](https://full-stack-open-pokedex-vd0j.onrender.com/)**  

## Learn More  

For more information about the Full Stack Open course, visit the **[official website](https://fullstackopen.com/en/part11/introduction_to_ci_cd)**.
