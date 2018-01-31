import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';

// DOMUSTO
import DomustoShell from './';
import { Domusto } from '../../domusto/DomustoTypes';

describe('PluginDomustoShell', () => {

    let DomustoShellProxy;
    let DomustoPluginProxy;
    let broadcastSignalSpy;

    let ShellPluginInstance;

    let executeCommandSpy;

    beforeEach(() => {

        ShellPluginInstance = new DomustoShell({
            id: 'SHELL',
            enabled: true,
        });

        executeCommandSpy = sinon.spy(ShellPluginInstance, 'executeCommand');

    });

    afterEach(() => {
        executeCommandSpy.restore();
    });

    it('should execute shell command signal received', () => {

        let signal: Domusto.Signal = {
            pluginId: 'SHELL',
            sender: Domusto.SignalSender.client,
            deviceId: 'shell',
            data: {
                shellCommand: 'pwd'
            }
        };

        ShellPluginInstance.onSignalReceivedForPlugin(signal);

        sinon.assert.calledOnce(executeCommandSpy);

    });

});