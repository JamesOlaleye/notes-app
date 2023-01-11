const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'note body',
      demandOption: 'true',
      type: 'string',
    },
  },
  handler(argv) {
    // console.log('Title: ' + argv.title);
    // console.log('Body: ' + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // console.log('Removing the note');
    notes.removeNote(argv.title);
  },
});

// Create List command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    // console.log('Listing out the notes');
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    // console.log('Reading notes');
    notes.readNote(argv.title);
  },
});

yargs.parse();
//console.log(yargs.argv);
