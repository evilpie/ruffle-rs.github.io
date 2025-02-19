"use client";

import React from "react";
import Script from "next/script";

declare global {
  interface Window {
    RufflePlayer: PublicAPI;
  }

  interface PublicAPI {
    newest(): SourceAPI;
  }

  interface SourceAPI {
    createPlayer(): RufflePlayer;
  }

  interface RufflePlayer extends HTMLElement {
    load(options: object): Promise<void>;
  }
}

interface LogoProps {
  className?: string;
}

export default class InteractiveLogo extends React.Component<LogoProps> {
  private readonly container: React.RefObject<HTMLDivElement>;
  private player: RufflePlayer | null = null;

  constructor(props: LogoProps) {
    super(props);

    this.container = React.createRef();
  }

  private load() {
    if (this.player) {
      // Already loaded.
      return;
    }

    this.player = (window.RufflePlayer as PublicAPI)?.newest()?.createPlayer();

    if (this.player) {
      this.container.current!.appendChild(this.player);

      this.player.load({
        url: "/logo-anim.swf",
        autoplay: "on",
        unmuteOverlay: "hidden",
        backgroundColor: "#37528C",
        contextMenu: "off",
        splashScreen: false,
        preferredRenderer: "canvas",
      });
      this.player.style.width = "100%";
      this.player.style.height = "100%";
    }
  }

  componentDidMount() {
    this.load();
  }

  componentWillUnmount() {
    this.player?.remove();
    this.player = null;
  }

  render() {
    return (
      <>
        <Script
          src="https://unpkg.com/@ruffle-rs/ruffle"
          onReady={() => this.load()}
        />
        <div ref={this.container} className={this.props.className} />
      </>
    );
  }
}
