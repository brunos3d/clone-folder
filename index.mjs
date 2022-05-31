#!/usr/bin/env zx

const [user, repo] = (await question('Enter the repository <USER/REPO>: ')).split('/');
const directory = await question('Enter the directory to clone: ');

await $`git clone --depth 1 --filter=blob:none --sparse https://github.com/${user}/${repo}`;

cd(repo);

await $`git sparse-checkout init --cone`;

await $`git sparse-checkout set ${directory}`;
