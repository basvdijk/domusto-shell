# Shell executer

```
plugin:    Shell executer
author:    Bas van Dijk
category:  system
version:   0.0.1
website:   http://domusto.com
```

## Features
- [x] Execute shell command on DOMUSTO event

## Hardware needed
- none

## Tested with
 - `ls`
 - `aplay`

## Installation
```sh
$ ./domusto.js plugin install basvdijk/domusto-shell
```
 
## Configuration

1. Add the section below to your `config.ts`
2. Restart DOMUSTO

```js
{
    enabled: true,
    type: 'SHELL',
}
```

## Example device

```
{
    id: 'SHELL1',
    enabled: true,
    role: 'output',
    name: 'shell test',
    type: 'switch',
    subtype: 'on/off',
    protocol: {
        pluginId: 'SHELL',
        id: 'SHELL1',
        actions: {
            on: 'aplay assets/audio/doorbell.wav',
            off: 'pwd'
        }
    }
}
```