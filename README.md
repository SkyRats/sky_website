# Skyrats Website

Skyrats is an autonomous drone team from University of São Paulo. 

This is our official website 💜

## Contact
We are very active on [Instagram](https://instagram.com/equipe_skyrats). You can reach out to us trough DM or take a look into our bio links.

Feel free to send us an email: equipeskyrats@gmail.com

## Feedback and reports on this website

You can open Issues on this repo and even make Pull Requests.

If you need to know more about the deployment in skyrats.com.br ["Click Here"](https://registro.br/tecnologia/ferramentas/whois?search=skyrats.com.br) and contact the "Contato Técnico" listed on the domain registry.

## Copyright

To use any of our public available content, please talk to our communication team, it will be quick. You can reach them trough Instagram or email.

We always want to know where our content it's going to be displayed and how we might help and collaborate!

## Techical bullet points for local development

- Use node >= v20
- You will need a local redis server or connect to production server (not recommended)
- Copy `.env.sample` file to a new `.env.development.local` file
- `$ npm i` to install dependencies
- `$ npm run dev` to start local development server

## Extra important information for devs

- Deployment to production occurs in main branch, if the last commit was signed by skyrats.poli@gmail.com
- Tough Swagger UI is not deployed, the api endpoints should be annotated with OpenAPI, copy and paste `app/api/openapi.yml` file [in this webviewer](https://editor.swagger.io/) to get access to API documentation
- Unit testing for the API is configured with jest, it runs automatically in all branchs upon push and can be triggered locally with `$ npm run test`

Happy codding!