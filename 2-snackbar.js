import{p as r}from"./assets/error-icon-DyD4GR31.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const l="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.75001%2012C3.74979%2010.5518%204.13082%209.12893%204.85482%207.87459C5.57882%206.62026%206.62026%205.57861%207.87445%204.85437C9.12865%204.13013%2010.5514%203.74881%2011.9997%203.74876C13.448%203.7487%2014.8708%204.1299%2016.125%204.85405C16.2972%204.95193%2016.5011%204.97775%2016.6922%204.92586C16.8833%204.87397%2017.0462%204.74858%2017.1452%204.57707C17.2442%204.40555%2017.2714%204.20183%2017.2208%204.01036C17.1702%203.81888%2017.0459%203.65521%2016.875%203.55505C15.0163%202.48192%2012.8554%202.05208%2010.7275%202.33219C8.59964%202.61229%206.62362%203.5867%205.10594%205.10428C3.58826%206.62186%202.61373%208.59782%202.33349%2010.7257C2.05324%2012.8536%202.48294%2015.0145%203.55595%2016.8733C4.62896%2018.732%206.28531%2020.1848%208.26813%2021.0063C10.2509%2021.8278%2012.4494%2021.9721%2014.5226%2021.4168C16.5958%2020.8615%2018.4278%2019.6377%2019.7345%2017.9351C21.0413%2016.2325%2021.7497%2014.1463%2021.75%2012C21.75%2011.8011%2021.671%2011.6104%2021.5303%2011.4697C21.3897%2011.3291%2021.1989%2011.25%2021%2011.25C20.8011%2011.25%2020.6103%2011.3291%2020.4697%2011.4697C20.329%2011.6104%2020.25%2011.8011%2020.25%2012C20.25%2014.1881%2019.3808%2016.2865%2017.8336%2017.8337C16.2865%2019.3809%2014.188%2020.25%2012%2020.25C9.81198%2020.25%207.71356%2019.3809%206.16638%2017.8337C4.61921%2016.2865%203.75001%2014.1881%203.75001%2012Z'%20fill='white'/%3e%3cpath%20d='M23.031%205.03109C23.1008%204.96136%2023.1561%204.87858%2023.1938%204.78747C23.2316%204.69636%2023.251%204.59871%2023.251%204.50009C23.251%204.40148%2023.2316%204.30383%2023.1938%204.21272C23.1561%204.12161%2023.1008%204.03882%2023.031%203.96909C22.9613%203.89936%2022.8785%203.84405%2022.7874%203.80631C22.6963%203.76857%2022.5986%203.74915%2022.5%203.74915C22.4014%203.74915%2022.3038%203.76857%2022.2127%203.80631C22.1215%203.84405%2022.0388%203.89936%2021.969%203.96909L12%2013.9396L8.03103%209.96909C7.9613%209.89936%207.87852%209.84405%207.78741%209.80631C7.6963%209.76857%207.59865%209.74915%207.50003%209.74915C7.40142%209.74915%207.30377%209.76857%207.21266%209.80631C7.12155%209.84405%207.03876%209.89936%206.96903%209.96909C6.8993%2010.0388%206.84399%2010.1216%206.80625%2010.2127C6.76851%2010.3038%206.74908%2010.4015%206.74908%2010.5001C6.74908%2010.5987%206.76851%2010.6964%206.80625%2010.7875C6.84399%2010.8786%206.8993%2010.9614%206.96903%2011.0311L11.469%2015.5311C11.5387%2015.6009%2011.6215%2015.6564%2011.7126%2015.6942C11.8037%2015.732%2011.9014%2015.7514%2012%2015.7514C12.0987%2015.7514%2012.1964%2015.732%2012.2875%2015.6942C12.3786%2015.6564%2012.4614%2015.6009%2012.531%2015.5311L23.031%205.03109Z'%20fill='white'/%3e%3c/svg%3e";document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault();const C=parseInt(t.target.elements.delay.value),s=t.target.elements.state.value;new Promise((e,i)=>{setTimeout(()=>{s==="fulfilled"?e(C):i(C)},C)}).then(e=>{o.success({title:"Success",message:`Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59a10d",titleColor:"#fff",messageColor:"#fff",iconUrl:l})}).catch(e=>{o.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff",iconUrl:r})})});
//# sourceMappingURL=2-snackbar.js.map
