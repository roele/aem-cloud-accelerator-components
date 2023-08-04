import express, { Express, Request, Response } from "express";
import processHtml from "./aem-processor.functions";

const app: Express = express();
const port = 3233;
const path = '/api/v1/web/guest/acme-app-cpa-0.1.0/ssr';

//configure express to use body-parser as middle-ware
app.use(express.text({ type: 'text/html' }));

app.post(`${path}/*`, (req: Request, res: Response) => {
  const args = {
    data: req.body,
    method: req.method,
    pagePath: req.path.replace('.html', ''),
    wcmmode: req.header('wcm-mode'),
  };

  return processHtml(args).then((response) => {
    console.info('Serving response', response);
    res.send(response);
  }).catch((error) => {
    console.error('An error occurred', error);
    //send the error message to the response so AEM can log it as well.
    const msg = (error.stack) ? error + ' stack: ' + error.stack : error;
    res.status(500).send(msg);
  });
});

app.listen(port, () => console.log(`Express SSR handler running on http://localhost:${port}${path}`));
