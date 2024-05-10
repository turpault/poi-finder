import { injestFiles} from './ingest';
import { setupRepl, setupServer } from './service';


injestFiles(process.argv.slice(2));
setupServer();
setupRepl();
