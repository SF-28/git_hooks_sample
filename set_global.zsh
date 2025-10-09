#!/usr/bin/env zsh

# set global
pnpm setup
source ~/.zshrc

# install commitizen globally
pnpm add -g commitizen cz-customizable

# create .czrc and set cz-customizable
echo '{ "path": "cz-customizable" }' > ~/.czrc

# copy cz-config
cp .cz-config.js ~/.cz-config.js
