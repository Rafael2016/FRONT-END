const token = 'AQXnQUiv2F2uiSiwo0cs42BqnvmgAHfz-xv2dCLJbuR87wWgSp3LviqWv6hjm1HV0LK4fi8ps_GJtLjdFpC_onvcY9Bu2akElVs00d_wQckS75vG2xNegAzD2f-K6REDLxeN1qojvi2cnmGmR4KOi6SFY4v6ojrBwHLaDzlF3EnMv8NE7mJ9JM7kgn0QJNlExr5n80OWpuvAgsX-7XbaqoClmDuAyCOXkt1A9qd60nwsORWEHz_8WFB-gR4SF4hn1Ix-yvh4BGPrYE7fzqK7U-yN_8ISvmlud4za3uSP1oio9ksJGigqAKD1sMy6VUOBHQNEIDQ4_SRFPl6M8hxNV2ZS2j0lYA';

const  idDaPagina = '775rvg3vso9y2b';

fetch(`https://api.linkedin.com/v2/organizations/${idDaPagina}/posts?q=vaga de emprego`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.elements);
  })
  .catch((error) => {
    console.error(error);
  });