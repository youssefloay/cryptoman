const program = require('commander');
const check =  require('../commands/check');

program
   .command ('price')
  .description ('Check price of coins')
  .option (
      '--coin <type>', 'Add coin details in csv','BTC,ETH,XRP')
  .option('--cur <currency>', 'change the currency', 'EUR')

 .action (cmd => {
     return check.price(cmd);
 });


program.parse(process.argv);