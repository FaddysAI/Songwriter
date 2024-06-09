import puppeteer from 'puppeteer';

const page = await puppeteer .launch ()
.then ( browser => browser .newPage () );

page .on ( 'console', message => {

const type = message .type ();
const location = message .location ();
const text = message .text ();

console .error ( `#${ type } at ${ location .url }:${ location .line || '' }${ location .column ? `.${ location .column }` : '' }
${ message .text () }` )

} );

await page .goto ( 'http://localhost:7664' );

const body = await page .evaluate ( () => document .body .textContent );

console .log ( '#body', body );