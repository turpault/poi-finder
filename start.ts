import { injestFiles } from './src/ingest';
import { setupRepl, setupServer } from './src/service';


injestFiles(process.argv.slice(2));
setupServer();
setupRepl();
