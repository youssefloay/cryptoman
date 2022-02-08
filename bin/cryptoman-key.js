const program = require('commander');
const key = require ('../commands/key');
program

.command('set')
    .description('set API KEY -- Get at https://nomics.com')
    .action(key.set);


    program
.command('show')
    .description(' ShowAPI KEY ')
    .action(key.show);



    program
.command('remove')
    .description('remove API KEY ')
    .action(key.remove);



    program.parse(process.argv); 