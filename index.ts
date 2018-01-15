import config from '../../config';

// DOMUSTO
import DomustoPlugin from '../../domusto/DomustoPlugin';
import DomustoEmitter from '../../domusto/DomustoEmitter';

// INTERFACES
import { Domusto } from '../../domusto/DomustoInterfaces';

// PLUGIN SPECIFIC
import * as childProcess from 'child_process';

/**
 * Shell plugin for DOMUSTO
 * @author Bas van Dijk
 * @version 0.0.1
 *
 * @class DomustoShell
 * @extends {DomustoPlugin}
 */
class DomustoShell extends DomustoPlugin {

    /**
     * Creates an instance of DomustoShell.
     * @param {any} Plugin configuration as defined in the config.js file
     * @memberof DomustoShell
     */
    constructor(pluginConfiguration: Domusto.PluginConfiguration) {

        super({
            plugin: 'Shell executer',
            author: 'Bas van Dijk',
            category: Domusto.PluginCategories.system,
            version: '0.0.1',
            website: 'http://domusto.com'
        });

        this.console.header(`${pluginConfiguration.id} plugin ready`);

    }

    /**
     * Executed when a signal is received for this plugin
     *
     * @param {Domusto.Signal} signal
     * @memberof DomustoShell
     */
    onSignalReceivedForPlugin(signal: Domusto.Signal) {

        if (!this._busy) {

            let shellCommand = signal.data['shellCommand'];

            this._busy = true;

            if (shellCommand) {

                this.executeCommand(shellCommand);

            } else {
                this.console.error('No action defined in ', signal);
            }
        }

    }

    /**
     * Run given shell command
     *
     * @param {any} shellCommand
     * @memberof DomustoShell
     */
    executeCommand(shellCommand) {

        childProcess.exec(shellCommand, (error, stdout, stderr) => {
            this.console.debug('error', error);
            this.console.debug('stdout', stdout);
            this.console.debug('stderr', stderr);

            this._busy = false;

        });

    }

}

export default DomustoShell;