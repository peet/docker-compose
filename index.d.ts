declare module "docker-compose" {
  interface IDockerCompose {
    upAll(options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    upMany(services: string[] ,options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    upOne(service: string, options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    kill(options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    down(options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    stop(options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    rm(options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    exec(options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    run(container: string, command: string, options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    buildAll(options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    buildMany(services: string[] ,options: IDockerComposeOptions): Promise<IDockerComposeResult>;
    buildOne(service: string, options: IDockerComposeOptions): Promise<IDockerComposeResult>;
  }

  interface IDockerComposeOptions {
    cwd: string;
    config?: string | string[];
    log?: boolean;
  }

  interface IDockerComposeResult {
    out: string;
    err: string;
  }

  const _: IDockerCompose;
  export = _;
}
