# Awesome-Selfhosted

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Selfhosting is the process of locally hosting and managing applications instead of renting from SaaS providers.

This is a list of [Free](https://en.wikipedia.org/wiki/Free_software) Software [network services](https://en.wikipedia.org/wiki/Network_service) and [web applications](https://en.wikipedia.org/wiki/Web_application) which can be hosted locally. Non-Free software is listed on the [Non-Free](non-free.md) page.

Table of Contents
=================

<!-- MarkdownTOC depth=3 -->

- [Analytics](#analytics)
- [Automation](#automation)
- [Blogging Platforms](#blogging-platforms)
- [Bookmarks & Link Sharing](#bookmarks--link-sharing)
- [Calendar and Address Books](#calendar-and-address-books)
- [Communication systems](#communication-systems)
  - [Email](#email)
  - [XMPP](#xmpp)
  - [VoIP](#voip)
  - [IRC](#irc)
  - [Custom](#custom)
  - [Social Networks and Forums](#social-networks-and-forums)
- [Content Management Systems (CMS)](#content-management-systems-cms)
- [Download Tools](#download-tools)
- [Federated Identity/Authentication](#federated-identityauthentication)
- [Feed Readers](#feed-readers)
- [File Sharing and Synchronization](#file-sharing-and-synchronization)
- [Games](#games)
- [Gateways](#gateways)
- [Groupware](#groupware)
- [Maps & GPS](#maps--gps)
- [Media Streaming](#media-streaming)
- [Mind Maps](#mind-maps)
- [Money, Budgeting and Management](#money-budgeting-and-management)
- [Monitoring and Administration](#monitoring-and-administration)
- [Music Streaming](#music-streaming)
- [Note-taking & Editors](#note-taking--editors)
- [Office Suites](#office-suites)
- [Password Managers](#password-managers)
- [Pastebins](#pastebins)
- [Photo and Video Galleries](#photo-and-video-galleries)
- [Polls and Events](#polls-and-events)
- [Proxy](#proxy)
- [Read it Later Lists](#read-it-later-lists)
- [Search Engines](#search-engines)
- [Software Development](#software-development)
  - [Project Management](#project-management)
  - [IDE/Tools](#idetools)
  - [Continuous Integration](#continuous-integration)
  - [Bug and Task Trackers](#bug-and-task-trackers)
- [Static site generators](#static-site-generators)
- [URL Shorteners](#url-shorteners)
- [Wikis](#wikis)
- [Self-hosting Solutions](#self-hosting-solutions)
- [List of Licenses](#list-of-licenses)
- [External links](#external-links)
- [Contributing](#contributing)
- [License](#license)

<!-- /MarkdownTOC -->

## Analytics

  * [Open Web Analytics](http://www.openwebanalytics.com/) - Google Analytics and Piwik alternative - `GPL` `PHP`
  * [Piwik](https://piwik.org/) - Leading open-source analytics platform that gives you more than just powerful analytics. - `GPLv3` `PHP`
  * [ThinkUp](https://www.thinkup.com/) - Insights into your social networking activity on Twitter, Facebook, Instagram, and beyond. ([Source code](https://github.com/ThinkUpLLC/ThinkUp)) - `GPL` `PHP`

## Automation

  * [Huginn](https://github.com/cantino/huginn) - Allows you to build agents that monitor and act on your behalf. Built in Ruby - `MIT` `Ruby`


## Blogging Platforms

See also [Static Site Generators](#static-site-generators) and  [Content Management Systems](#content-management-systems-cms)

  * **[WeblogMatrix](http://www.weblogmatrix.org/) - Blogging platforms comparator**
  * [Anchor CMS](http://anchorcms.com/) -  Anchor is a free, lightweight, faster-than-a-bullet, simple blogging system, made for art–directed posts. ([Source code](https://github.com/anchorcms/anchor-cms)) `GPLv3` `PHP`
  * [Blogotext](http://lehollandaisvolant.net/blogotext/en/) - a free blog-engine written in PHP and using SQLite. This offers you both an unmatched simplicity during installation and great performances. ([Source code](https://github.com/timovn/blogotext)) `MIT` `PHP`
  * [Chyrp](http://chyrp.net/) - An extra-awesome, extra-lightweight blog engine ([Source code](https://github.com/chyrp/chyrp)) `MIT` `PHP`
  * [Dotclear](http://dotclear.org/) - Take control over your blog! ([Source code](https://hg.dotclear.org/dotclear)) `GPLv2` `PHP`
  * [Ghost](http://ghost.org/) - Just a blogging platform ([Source code](https://github.com/TryGhost/Ghost)) `MIT` `Nodejs`
  * [htmly](http://www.htmly.com/) - Databaseless Blogging Platform (Flat-File Blog) ([Source code]((https://github.com/danpros/htmly)), [Demo](http://www.htmly.com/demo/)) `GPLv2` `PHP`
  * [Known](https://withknown.com/opensource/) - A single website for all your content `Apache` `PHP`
  * [Noddity](http://noddity.com/) - It's a blog, it's a wiki, it's a fast CMS! ([Source code](https://github.com/TehShrike/noddity)) `WTFPL` `Nodejs`
  * [PluXml](http://www.pluxml.org/) - XML-based blog/CMS platform ([Source code](https://github.com/pluxml/PluXml)) `GPL` `PHP`
  * [Wordpress](https://wordpress.org/) - Create a beautiful website or blog. ([Source code](https://github.com/WordPress/WordPress)) `GPLv2`
 
 

## Bookmarks & Link Sharing

  * [Bookie](https://github.com/bookieio/Bookie) - Python based delicious.com replacement ([Firefox addon](https://github.com/bookieio/bookie-firefox), [Demo](http://bmark.us/), [Documentation](http://docs.bmark.us/)
  * [Firefox Accounts Server](https://docs.services.mozilla.com/howtos/run-fxa.html)
   * [Firefox Sync Server](https://docs.services.mozilla.com/howtos/run-sync-1.5.html) - Sync Firefox bookmarks, passwords, history, tabs, preferences
  * [Lobsters](https://lobste.rs) - Run your own link aggregation site - ([Source code](https://github.com/jcs/lobsters))
  * [Pinry](http://getpinry.com/) - The tiling image board system for people who want to save, tag, and share images, videos, and webpages. ([Demo](http://demo.getpinry.com/), [Source code](https://github.com/pinry/pinry))
  * [semanticscuttle](http://semanticscuttle.sourceforge.net/) - a social bookmarking tool experimenting with features like structured tags and collaborative tag descriptions.
  * [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, no-database bookmarking and link sharing plaform. ([Demo](http://shaarlidemo.tuxfamily.org/Shaarli) - `demo/demo`)
  * [unmark](https://github.com/plainmade/unmark) - An open source to do app for links



## Calendar and Address Books

  * [AgenDAV](http://agendav.org/) - Multilanguage CalDAV web client with a rich AJAX interface and shared calendars support
  * [Baïkal](http://baikal.codr.fr/) - Lightweight CalDAV+CardDAV server
  * [CalendarServer](http://trac.calendarserver.org/) - a standards-compliant server implementing the CalDAV and CardDAV protocols. `Apache` `Python`
  * [calypso](http://keithp.com/calypso/) - a python-based CalDAV/CardDAV server
  * [DAViCal](http://www.davical.org/) - a server for calendar sharing (CalDAV)
  * [Radicale](http://radicale.org/) - A Simple Calendar and Contact Server

## Communication systems

### Email
  * [Cypht](http://cypht.org/index.html) - A feed reader for your email accounts - `GPL` 
  * [mailcow](https://github.com/andryyy/mailcow) - Mail server suite based on Dovecot, Postfix and other open source software, that provides a modern Web UI for administration. `GPL`
  * [RainLoop](http://www.rainloop.net/) - Simple, modern & fast web-based email client. ([Demo](http://demo.rainloop.net/), [Source code](https://github.com/RainLoop/rainloop-webmail)). `AGPLv3` `PHP`
  * [Roundcube](https://roundcube.net) - A web interface to act as an IMAP frontend ([Screenshots](https://roundcube.net/screens/)) ([Source code](https://github.com/roundcube/roundcubemail/)) `GPLv3` `PHP`

### XMPP
  * [Converse.js](https://conversejs.org/) - A free and open-source XMPP chat client in your browser ([Source](https://github.com/jcbrand/converse.js)) `MPL` `Javascript`
  * [ejabberd](http://www.ejabberd.im) - A robust, scalable, and extensible XMPP server - `GPL` `Erlang`
  * [Kaiwa](http://getkaiwa.com) A modern XMPP Web client ([Source code](https://github.com/digicoop/kaiwa))
  * [Kontalk](http://kontalk.org/) – Kontalk is an Open Source Messenger, similiar to WhatsApp (app for android only currently), including end-to-end encryption, server is based on Tigase XMPP Server - ([Source code](https://github.com/kontalk)) - `GPLv3`
  * [Metronome](http://www.lightwitch.org/metronome) – XMPP server forked from Prosody. `MIT` `Lua`
  * [OpenFire](http://www.igniterealtime.org/projects/openfire/) - instant messaging (XMPP) and groupchat server `Apache` `Java`
  * [Prosody](http://prosody.im/) – Lightweight XMPP server `MIT` `Lua`


### VoIP
  * [FreeSWITCH](https://freeswitch.org/) - Scalable open source cross-platform telephony platform `MPL` `C`
  * [Kamailio](http://www.kamailio.org/w/) - Modular SIP server (registrar/proxy/router/etc) `GPLv2` `C`
  * [Ostel](https://dev.guardianproject.info/projects/ostel/wiki/Server_Documentation) - Secure SIP telephony setup with ZRTP encryption `GPLv3` `Ruby`

### IRC
  * [Shout](http://shout-irc.com/) -The self-hosted web IRC client ([Demo](http://demo.shout-irc.com/), [Source code](https://github.com/erming/shout)) `MIT` `Nodejs`
  * [Convos](http://convos.by/) - Always online web IRC client ([Demo](http://demo.convos.by), [Source code](http://github.com/nordaaker/convos)) `ARTv2` `Perl` 
  * [ZNC](http://wiki.znc.in/ZNC) - An advanced IRC bouncer `Apache` `C++`

### Custom
  * [GNUNet](https://gnunet.org/) - Free software framework for decentralized, peer-to-peer networking `GPLv3` `C/Java`
  * [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - Jitsi Meet is an OpenSource (MIT) WebRTC JavaScript application that uses Jitsi Videobridge to provide high quality, scalable video conferences. `MIT ` `JavaScript`
  * [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC compatible Selective Forwarding Unit (SFU) that allows for multiuser video communication. `Apache` `Java`
  * [Kandan](http://getkandan.com/) – Kandan is an Open Source Alternative to HipChat. - `AGPL` 
  * [Mumble](http://wiki.mumble.info/wiki/Main_Page) - low-latency, high quality voice/text chat software `BSD` `C++`
  * [Node-Chat](https://github.com/IgorAntun/node-chat) - A not-so-basic open-source chat with admin features. - `MIT` `Nodejs`
  * [Rocket.Chat](http://rocket.chat/) – Teamchat solution similar to Gitter.im or Slack - `MIT`
  * [Synapse](https://matrix.org/blog/project/synapse/) - A server for [Matrix](https://matrix.org/), an open standard for decentralized persistent communication ([Source code](https://github.com/matrix-org/synapse)) `Apache` `Python`
    * [Matrix Console Web](https://matrix.org/blog/project/matrix-console-web/) - A web client meant to be a showcase of Matrix capabilities, and reference implementation of the Matrix standard ([Source code](https://github.com/matrix-org/matrix-angular-sdk)) `Apache` `Javascript`
  * [Tox](https://tox.im/) -  A distributed, secure messenger with audio and video chat capabilities. `GPLv3` `C`

### Social Networks and Forums

  * [Bootcamp](http://trybootcamp.vitorfs.com) - An enterprise social network - [Source code](https://github.com/vitorfs/bootcamp)
  * [BuddyPress](http://buddypress.org/about/) - A powerful plugin that takes your WordPress.org powered site beyond the blog with social-network features like user profiles, activity streams, user groups, and more.
  * [Diaspora](https://diasporafoundation.org/) - Distributed social networking service. - `AGPLv3`
  * [Discourse](http://www.discourse.org/) - Advanced forum / community solution based on Ruby and JS - `GPLv2`
  * [Elgg](https://www.elgg.org/) - a powerful open source social networking engine - `GPLv2`
  * [Flarum](http://flarum.org) - Delightfully simple forums. Flarum is the next-generation forum software that makes online discussion fun again. ([Source Code](https://github.com/flarum/flarum)) - `MIT` `PHP`
  * [Friendica](http://friendica.com/) - Social Communication Server ([Source code](https://github.com/friendica/friendica)) `AGPLv3`
  * [Gnu Social](http://gnu.io/social/) - social communication software for both public and private communications
  * [Hubzilla](https://github.com/redmatrix/hubzilla) - independent general-purpose websites that not only connect with their associated members and viewers, but also connect together `MIT` `PHP`
  * [HumHub](https://www.humhub.org/) - A flexible kit for private social networks ([Source Code](https://github.com/humhub/humhub)) `AGPLv3` `PHP`
  * [Isso](http://posativ.org/isso/) - a lightweight commenting server written in Python and JavaScript. It aims to be a drop-in replacement for Disqus ([Source code](https://github.com/posativ/isso)) `MIT` `Python`
  * [Jappix](https://jappix.com/) - Jappix is an open social platform, that let's you easily get or keep in touch with everyone.
  * [Movim](https://movim.eu/) - A brand new social network, full of awesome features in a modern and smart interface
  * [NodeBB](https://nodebb.org/) - Node.js based forum software built for the modern web ([Source code](https://github.com/NodeBB/NodeBB)) - `GPLv3` `Node.js`
  * [PPnet](https://github.com/pixelpark/ppnet) Create and host your own social network. `MIT` `JavaScript`
  * [Pump.io](http://pump.io/) - stream server that does most of what people really want from a social network ([Source code](https://github.com/e14n/pump.io))
  * [Reddit](https://www.reddit.com/) - social networking and news website where registered community members can submit content. ([Demo](https://www.reddit.com/) [Source Code](https://github.com/reddit/reddit)) `CPALv1` `Python`
  * [RedMatrix](http://redmatrix.me/) - complete decentralised publishing, sharing, and communications system ([Source code](https://github.com/redmatrix/redmatrix))
  * [twister](http://twister.net.co/) -  P2P microblogging platform


## Content Management Systems (CMS)

CMS are a practical way to setup a website with many features. CMS often come with third party plugins, themes and functionality that is easy to add and customize to your needs. See also [Blogging Platforms](#blogging-platforms) and [Static Site Generators](#static-site-generators)

  * [99ko CMS](http://99ko.hellojo.fr) - 99ko allows you to create a website in minutes without knowledge of Web development. It does not use a database server but relies on simple text files (JSON format) to store your data. ([Source code](https://github.com/99ko-project/99ko-cms))
  * [Baun](http://bauncms.com/) - A modern, lightweight, extensible CMS for PHP - ([Source code](https://github.com/BaunCMS/Baun)) `MIT`
  * [BigTree CMS](https://www.bigtreecms.org/) - straightforward, well documented, and capable written with PHP and MySQL ([Source code](https://github.com/bigtreecms/BigTree-CMS)) `LGPL`
  * [Bolt](http://bolt.cm/) - Sophisticated, lightweight & simple CMS ([Source code](https://github.com/bolt/bolt))
  * [CMS Made Simple](http://www.cmsmadesimple.org/) - open source content management system, faster and easier management of website contents, scalable for small businesses to large corporations. `GPL`
  * [Concrete 5 CMS](http://www.concrete5.org/) - an open source content management system `MIT`
  * [Drupal](https://drupal.org/) - Advanced open source content management platform `GPL`
  * [Gazelle](https://github.com/WhatCD/Gazelle) - Gazelle is a web framework geared towards private BitTorrent trackers. Although naturally focusing on music, it can be modified for most needs. `PHP`
  * [Grav](http://getgrav.org/) -  Modern, Crazy Fast, Ridiculously Easy and Amazingly Powerful Flat-File CMS  ([Source code](https://github.com/getgrav/grav)) `MIT` `PHP`
  * [GetSimple CMS](http://get-simple.info/) - The Simplest Content Management System. Ever. `GPLv3`
  * [ImpressPages CMS](https://www.impresspages.org/) - Easy code meets easy admin. ([Demo](https://www.impresspages.org/demo), [Source Code](https://github.com/impresspages/ImpressPages)) `GPLv3`/`MIT`  `PHP`
  * [Joomla!](http://www.joomla.fr/) - Advanced Content Management System (CMS) `GPL`
  * [KeystoneJS](http://keystonejs.com/) - Node.js CMS & Web Application Platform ([Demo](http://demo.keystonejs.com/), [Source Code](https://github.com/keystonejs/keystone)) `MIT` `Node.js`
  * [Movable Type](https://movabletype.org/) - a powerful solution for the creation and management of web content.
  * [october](http://octobercms.com/) - Free, open-source, self-hosted CMS platform based on the Laravel PHP Framework. ([Source code](https://github.com/octobercms/october)) `MIT`
  * [Pagekit](http://pagekit.com/) - A new modern CMS to create and share ([Source code](https://github.com/pagekit/pagekit)) - `MIT`
  * [Pico](http://picocms.org/) - A stupidly simple, blazing fast, flat file CMS. ([Source code](https://github.com/gilbitron/Pico)) `MIT`
  * [SilverStripe](https://www.silverstripe.org) - easy to use CMS with powerful MVC framework underlying. ([Demo](http://demo.silverstripe.org/), [Source code](https://github.com/silverstripe)) `BSD` `PHP`
  * [SPIP](http://www.spip.net/fr) - Publication system for the Internet. 
  * [Wordpress](https://wordpress.org/) - The worlds most-used blogging and CMS engine. ([Source code mirror](https://github.com/WordPress/WordPress)) `GPLv2`


## Download Tools

 * [Alltube](https://github.com/Rudloff/alltube) - A web interface for [youtube-dl](https://github.com/rg3/youtube-dl), a program to download videos and audio from [more than 100 websites](https://rg3.github.io/youtube-dl/supportedsites.html) ([Demo](http://alltubedownload.net/)) `GPL`


## Federated Identity/Authentication

  * [BrowserID/Mozilla Persona](https://developer.mozilla.org/en-US/Persona/Identity_Provider_Overview)
  * [IndieAuth](https://indieauth.com) - Sign in with your domain name (using the [rel-me-auth](http://microformats.org/wiki/relmeauth) protocol) `Apache` `Ruby`
  * [Libravatar](https://www.libravatar.org/) -  a service which delivers your avatar (profile picture) to other websites
  * [OpenCA OCSPD](https://pki.openca.org/projects/ocspd/) - [OCSP](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol) Responder
  * [OpenID/OpenID Connect](http://openid.net/developers/libraries/)


## Feed Readers

  * [Cacocloud](https://github.com/Cacodaimon/CacoCloud) - A simple, fast and secure PHP/AngularJS based feed and mail reader, password and bookmark manager.
  * [CommaFeed](https://www.commafeed.com/) - Google Reader inspired self-hosted RSS reader ([Source code](https://github.com/Athou/commafeed))
  * [Creaky Coot](https://github.com/piero-la-lune/Creaky-Coot) - Minimalist and responsive RSS reader and links saver
  * [Feedbin](https://feedbin.me) - a simple, fast and nice looking RSS reader. ([Source code](https://github.com/feedbin/feedbin))
  * [FeedHQ](https://feedhq.org/) - FeedHQ is a web-based feed reader ([Source code](https://github.com/feedhq/feedhq))
  * [FreshRSS](http://freshrss.org/) - A self-hostable RSS feed aggregator ([Demo](http://demo.freshrss.org/i/), [Source code](https://github.com/FreshRSS/FreshRSS), [Mobile app](https://github.com/Alkarex/EasyRSS)) - `AGPLv3`
  * [gritttt-rss](http://gritttt-rss.nicolashoening.de/) - More features for Tiny Tiny RSS [Source code](https://github.com/nhoening/gritttt-rss)
  * [Kriss Feed](http://tontof.net/kriss/feed/) - A simple and smart (or stupid) feed reader ([Demo](http://tontof.net/feed/), [Source code](https://github.com/tontof/kriss_feed/))
  * [Leed](http://projet.idleman.fr/leed/) - Leed (for Light Feed) is a Free and minimalist RSS aggregator ([Source code](https://github.com/ldleman/Leed))
  * [Leselys](https://github.com/socketubs/leselys) - your very elegant RSS reader
  * [Liled](https://github.com/ypo/liled) - Liled is an aggregator, capable of reading Atom and RSS feeds ([Demo](http://liled.alwaysdata.net/app/index.php) - _guest/guest_)
  * [Lite-Reader](http://cubny.com/lite-reader/) - Read your feeds on your own machine with a simple and lite application. ([Source code](https://github.com/cubny/lite-reader))
  * [Miniflux](http://miniflux.net/) - Miniflux is a minimalist and open source news reader. ([Source code](https://github.com/fguillot/miniflux))
  * [NewsBlur](https://github.com/samuelclay/NewsBlur) - NewsBlur is a personal news reader that brings people together to talk about the world. A new sound of an old instrument
  * [Reader-Self](http://readerself.com/) Self-hosted rss reader (php / mysql or sqlite) - Google Reader alternative ([Source code](https://github.com/readerself/readerself))
  * [Readr](https://github.com/pabloprieto/Readr) - A clean & simple, self-hosted RSS reader
  * [RSSminer](http://rssminer.net/) -An online rss reader written in clojure & javascript & java ([Source code](https://github.com/shenfeng/rssminer))
  * [Selfoss](http://selfoss.aditu.de/) - The new multipurpose rss reader, live stream, mashup, aggregation web application ([Source code](https://github.com/SSilence/selfoss)) - `AGPLv3`
  * [Stringer](https://github.com/swanson/stringer) - A work-in-progress self-hosted, anti-social RSS reader.
  * [Tiny Tiny RSS](https://tt-rss.org/redmine/projects/tt-rss/wiki) - Open source web-based news feed (RSS/Atom) reader and aggregator. ([Demo](http://tt-rss.org/demo/), [Public instance](http://framanews.org/), [Applications](http://tt-rss.org/redmine/projects/tt-rss/wiki/RelatedSoftware)) - `GPLv3`
    * [ttrss-mobile](https://github.com/mboinet/ttrss-mobile) - A mobile webapp for Tiny Tiny RSS



## File Sharing and Synchronization

  * [Camlistore](https://camlistore.org/) - Camlistore is a set of open source formats, protocols, and software for modeling, storing, searching, sharing and synchronizing data in the post-PC era. Data may be files or objects, tweets or 5TB videos, and you can access it via a phone, browser or FUSE filesystem. ([Source code](https://github.com/camlistore/camlistore)) `Apache` `Go`
  * [Coquelicot](https://coquelicot.potager.org/) - Coquelicot is a “one-click” file sharing web application with a focus on protecting users’ privacy. - `AGPLv3`
  * [Dropcenter](http://projet.idleman.fr/dropcenter/) - Upload files by simple drag-n-drop.
  * [droppy](https://github.com/silverwind/droppy) - droppy is a self-hosted cloud server with an interface similar to desktop file managers and has capabilites to edit files on-the-fly as well as view and playback media directly in the browser. ([Demo](http://droppy.silverwind.io/)) `BSD` `Nodejs`
  * [eXtplorer](http://extplorer.sourceforge.net/) - A PHP- and JavaScript- based File Manager
  * [Git Annex](http://git-annex.branchable.com/assistant/quickstart/) - File synchronization between computers, servers, external drives
  * [img.bi](https://github.com/imgbi/img.bi) - img.bi is a secure image hosting. Images are encrypted using AES-256 with random key in browser before upload. `GPLv3` `nodejs`
  * [instant.io](https://github.com/feross/instant.io) - Streaming file transfer over WebTorrent ([Demo](https://instant.io)) `MIT` `Nodejs`
  * [Jirafeau](https://gitlab.com/mojo42/Jirafeau/wikis/home) - Jirafeau is a web site permitting to upload a file in a simple way and give an unique link to it. ([Demo](http://jirafeau.net/))
  * [Jyraphe](http://home.gna.org/jyraphe/) - Jyraphe is a web application of file repository, easy to install and easy to use.
  * [lutim](https://github.com/ldidry/lutim) - Let's Upload That Image !
  * [Mediacrush](https://mediacru.sh/) - a website you can upload images, audio, and video to, and receive a link to share it with your friends ([Source code](https://github.com/MediaCrush/MediaCrush))
  * [OnionShare](https://onionshare.org/) - securely and anonymously share a file of any size.
  * [ownCloud](https://owncloud.org/) - All-in-one solution for saving and sharing files, photos, music- `AGPLv3`
  * [Pomf](https://github.com/nokonoko/Pomf) -  Simple file uploading and sharing, source for the now shut down site Pomf.se `MIT` `PHP/Nodejs`
  * [Pydio](https://pyd.io/) - Turn any web server into a powerful file management system and an alternative to mainstream cloud storage providers.
  * [Seafile](http://www.seafile.com/en/home/) - File hosting and sharing solution primary for teams and organizations. - `GPLv2`
  * [SparkleShare](http://sparkleshare.org/) - Self hosted, instant, secure file sync
  * [Syncany](https://www.syncany.org/) - Secure file sync software for arbitrary storage backends - An open-source cloud storage and filesharing application. Securely synchronize your files to any kind of storage!
  * [Syncthing](http://syncthing.net/) - Syncthing is an open source peer-to-peer file synchronisation tool ([Source code](https://github.com/syncthing/syncthing)) - `MPL 2.0`
  * [Tahoe-LAFS](https://www.tahoe-lafs.org/trac/tahoe-lafs) - Tahoe-LAFS is a Free and Open decentralized cloud storage system. It distributes your data across multiple servers. Even if some of the servers fail or are taken over by an attacker, the entire file store continues to function correctly, preserving your privacy and security.
  * [Z-Push](https://z-push.org/) - an implementation of Microsoft’s [ActiveSync](https://en.wikipedia.org/wiki/ActiveSync) protocol 


## Games

  * [20euros](https://github.com/jatekos101/20euros) - Clone of 2048 game with euros. - Unlicensed
  * [Agar.IO Clone](https://github.com/huytd/agar.io-clone) - Agar.io clone written with Socket.IO and HTML5 canvas - `MIT`
  * [Cubiks-2048](https://github.com/Kshitij-Banerjee/Cubiks-2048) - Clone of 2048 game in 3D. - `CCANC 4.0`

## Gateways

  * [GateOne](https://github.com/liftoff/GateOne/) - Gate One is an HTML5 web-based terminal emulator and SSH client. - `AGPLv3`
  * [Guacamole](http://guac-dev.org/) - Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC and RDP. ([Source code](https://github.com/glyptodon/)) `MIT` `Java/C` 


## Groupware

  * [egroupware](http://www.egroupware.org/) - Software suite including calendars, address books, notepad, project management tools, client relationship managemnt tools (CRM), knowledge management tools, a wiki and a CMS.
  * [Horde](http://www.horde.org/) - The Horde Project is about creating high quality Open Source applications and libraries, based on PHP and the Horde Framework. - `GPL` + Various Free Software / Open Source Software Licenses
  * [Kolab](https://kolab.org/) - Kolab community is a unified communication and collaboration system - `Various FLOSS Licenses` ([Source](http://git.kolab.org/))
  * [Tine 2.0org](https://www.tine20.org) - Contacts, Calendar, Tasks, WebDAV, ActiveSync, VOIP, Mail-Client, CRM, Sales, Projects, Timetracker -  ([Demo](https://demo.tine20.net)) - `AGPLv3`
 * [Zimbra Collaboration] (https://www.zimbra.com/downloads/) - Email, calendar, collaboration server with web interface and lots of integrations.  ([Source code]( https://www.zimbra.com/open-source)) `GPLv2/CPALv1` `Java`

## Maps & GPS

  * [Traccar](https://www.traccar.org/) - Java application to track GPS positions. Supports loads of tracking devices and protocols, has an Android and iOS App. Has a web interface to view your trips -  ([Demo](http://demo.traccar.org/), [Source code](https://github.com/tananaev?tab=repositories)) - `Apache`
  * [Graphhopper](https://graphhopper.com/) -  Fast routing library and server using OpenStreetMap ([Source code](https://github.com/graphhopper/graphhopper))
  * [Openstreetmap](http://www.openstreetmap.org/) - OpenStreetMap is a map of the world, created by people like you and free to use under an open license. ([Source code](https://github.com/openstreetmap/openstreetmap-website))


## Media Streaming

  * [Emby](https://github.com/MediaBrowser/MediaBrowser) - A home media server built using other popular open source technologies. - `GPLv2`
  * [HTPC Manager](http://htpc.io/) - A fully responsive interface to manage all your favorite media on your HTPC. - `MIT`
  * [Streama](https://github.com/dularion/streama) - Self-hosted Netflix alternative. - `MIT` `Java`

## Mind Maps
 * [Mindmaps](https://github.com/drichard/mindmaps) - An open source, offline capable, mind mapping application ([Demo](http://drichard.org/mindmaps/))



## Money, Budgeting and Management

  * [GLPI](http://www.glpi-project.org/spip.php?lang=en) - GLPI is an IT assests/resources/inventory manager ([Source code](https://forge.glpi-project.org/projects/glpi)) `GPLv2` `PHP`
  * [GRR](http://grr.devome.com/?lang=en) - Assets management and booking for small/medium companies ([demo](http://grr.devome.com/demo/week_all.php?year=2015&month=07&day=28&area=94), _administrateur/azerty_) `GPLv2` `PHP`
  * [InvoicePlane](https://invoiceplane.com/) - Manage quotes, invoices, payments and customers for your small business. - `MIT`


## Monitoring and Administration

  * [Adagios](http://adagios.org/) - Web based Nagios interface for configuration, as well as monitoring (as a replacement to the standard interface), and a REST interface ([Demo](http://demo.adagios.org/), [SourceCode](https://github.com/opinkerfi/adagios), [Documentation](https://github.com/opinkerfi/adagios/wiki)) - `GPLv3` `Python`
  * [adminer](http://www.adminer.org/) -  Database management in a single PHP file ([Source code](https://github.com/vrana/adminer))
  * [Icinga / Icinga 2](https://www.icinga.org/) - Nagios fork that has since lapped nagios several times. Comes with the possibility of clustered monitoring - ([SourceCode](https://github.com/Icinga)) - `GPLv2`
  * [linux-dash](https://github.com/afaqurk/linux-dash) - A drop-in, low-overhead monitoring web dashboard for a linux machine ([Demo](http://afaq.dreamhosters.com/linux-dash/))
  * [LibreNMS](http://www.librenms.org/) - Community-based GPL-licensed network monitoring system - `GPLv3`
  * [Nagios](https://www.nagios.org/) - Industry standard monitoring software, which has a lot of plugins and customisation posibilities. - `GPL`
  * [phpSysInfo](https://phpsysinfo.github.io/phpsysinfo/) - a customizable PHP script that displays information about your system nicely ([Demo](http://phpsysinfo.sourceforge.net/phpsysinfo/index.php?disp=bootstrap))
  * [Prometheus](http://prometheus.io/) - Monitoring system and time series database. ([Source code](https://github.com/prometheus/prometheus)) `Apache` `Go`
  * [psdash](https://github.com/Jahaja/psdash) - A linux system information web dashboard using psutils and flask
  * [pyDash](https://github.com/k3oni/pydash) - Small web-based monitoring dashboard for linux ([Demo](http://pydash.hostechs.com/main/) - _admin/admin_)
  * [Reportr](http://www.reportr.io/) - Your life's personal dashboard. ([Source code](https://github.com/Reportr/dashboard))
  * [sensu](https://sensuapp.org/) - monitor servers, services, application health, and business KPIs. Get notified about failures before your users do. Collect and analyze custom metrics. `MIT`
   * [uchiwa](https://uchiwa.io/) - simple dashboard for sensu


## Music Streaming

  * [Ampache](http://ampache.org/) - A web based audio/video streaming application `GPLv2` `PHP`
  * [cloudtunes](https://github.com/jakubroztocil/cloudtunes) -  Web-based music player for the cloud `MIT` `Python/Javascript`
  * [Groove Basin](http://groovebasin.com/) - A music player server with a web-based user interface inspired by Amarok 1.4 ([Source code](https://github.com/andrewrk/groovebasin)) `MIT` `Nodejs`
  * [mpd](http://www.musicpd.org/) - Daemon to remotely play music, stream music, handle and organize playlists. Many clients available. `GPLv2` `C++`
  * [Mopidy](http://mopidy.readthedocs.org/) - Extensible music server. Offers a superset of the mpd API, as well as integration with 3rd party services like Spotify, SoundCloud etc. ([Source code](https://github.com/mopidy/mopidy)) `Apache` `Python`
  * [Sonerezh](https://www.sonerezh.bzh/) - A self-hosted, web-based application for stream your music, everywhere. ([Demo](https://www.sonerezh.bzh/demo/), [Documentation](https://www.sonerezh.bzh/docs/), [Source code](https://github.com/sonerezh/sonerezh)) `GPLv3` `PHP`
  * [Subsonic](http://subsonic.org/) - Open-source web-based media streamer and jukebox ([Source code](https://github.com/EugeneKay/subsonic)) `GPLv3` `Java`




## Note-taking & Editors

  * [Jotter](https://github.com/yosko/jotter) - Jotter is a lightweight, no database, powerful web notebook that lets you create and manage notes online safely, quickly & easily. ([Demo](http://tools.yosko.net/demos/jotter/) - `demo/demo`)
  * [Laverna](https://laverna.cc/) - Laverna is a JavaScript note taking application with Markdown editor and encryption support. Consider it like open source alternative to Evernote ([Source code](https://github.com/Laverna/laverna), [Demo](https://laverna.cc/index.html#notes))
  * [minimalist-web-notepad](https://github.com/pereorga/minimalist-web-notepad)- a minimalist http://notepad.cc clone `Apache` `PHP`
  * [OpenNote](https://github.com/FoxUSA/OpenNote) - OpenNote was built to be an open web-based alternative to Microsoft OneNote (T) and EverNote
  * [Paperwork](http://paperwork.rocks) - OpenSource note-taking & archiving alternative to Evernote, Microsoft OneNote & Google Keep ([Source code](https://github.com/twostairs/paperwork))
  * [dillinger](http://dillinger.io/) - The last Markdown editor, ever. ([Source code](https://github.com/joemccann/dillinger/)) `MIT` `Nodejs`
  * [Turtl](https://turtl.it/) - A totally private personal database and note taking app ([Source code](https://github.com/turtl)) `GPLv3` `CommonLisp`


## Office Suites

  * [EtherCalc](https://ethercalc.org/) - Web spreadsheet. - `CPALv1`
  * [Etherpad](http://etherpad.org/) - Etherpad is a highly customizable Open Source online editor providing collaborative editing in really real-time. - `Apache`
  * [Only Office](http://onlyoffice.org/) - An office suite that enables you to manage documents, projects, team and customer relations in one place. `AGPLv3`

## Password Managers

 * [Keepass](http://keepass.info) - Free, open source, light-weight and easy-to-use password manager. `GPLv2` `C#`
 * [Rattic](http://rattic.org/) - Password Management for Humans ([Source code](https://github.com/tildaslash/RatticWeb))
 
## Pastebins

  * [0bin](https://github.com/sametmax/0bin) -  Client side encrypted pastebin `WTFPL` `Python`
  * [cryptonote](https://cryptonote.me/) - A simple open source web application that lets users encrypt and share messages that can only be read once ([Source code](https://github.com/alainmeier/cryptonote)) `BSD` `Ruby`
  * [hastebin](http://hastebin.com/about.md) - open source pastebin written in node.js ([Source code](https://github.com/seejohnrun/haste-server)) `Nodejs` `MIT`
  * [snipt](https://snipt.net/) -  Long-term memory for coders. Share and store code snippets  ([Source code](https://github.com/nicksergeant/snipt/)) `BSD` `Python`
  * [Sticky Notes](http://sayakb.github.io/sticky-notes/) - A powerful open-source pastebin application for effortless code sharing. `PHP` 
  * [Stikked](https://github.com/claudehohl/Stikked) - An advanced and beautiful pastebin written in `PHP` `GPLv3`
  * [tastebin](https://github.com/andreineculau/tastebin) - Updated version of hastebin plus additional features `Apache` `Nodejs`

## Photo and Video Galleries

  * [CumulusClips](http://cumulusclips.org/) - your own video sharing website with CumulusClips video sharing script. You can build a YouTube clone where users can upload, rate, comment on videos, and much more.  `GPLv2` `PHP` ([Demo](https://tube.devosi.org/))
  * [Gallery](http://galleryproject.org/) -  The simplest, most intuitive way to host your photos on your website ([Source code](https://github.com/gallery/gallery3)) `GPLv2` `PHP`
  * [Koken](http://koken.me/) - Content management and web site publishing for photographers `PHP` 
  * [Lychee](http://lychee.electerious.com/) - an open source grid and album based photo-management-system ([Source code](https://github.com/electerious/Lychee)) - `MIT` `PHP`
  * [Mediagoblin](http://mediagoblin.org) -  a Free software media publishing platform that anyone can run. You can think of it as a decentralized alternative to Flickr, YouTube, SoundCloud, etc `AGPLv3` `Python`
  * [MinigalNano](https://github.com/sebsauvage/MinigalNano) - MinigalNano is a very simple image gallery. It adheres to the KISS principle and is very easy to install. MinigalNano does not have a web admin interface: You just upload your images in the photo folder on your server (using FTP, SFTP) ([Demo](http://boards.tomcanac.com/)) `CC BY-SA 3.0` `PHP`
  * [phog](https://github.com/hillman/phog) - Static photo gallery generator with S3 uploader `Python`
  * [Photofloat](http://blog.zx2c4.com/567) - A Web 2.0 Photo Gallery Done Right via Static JSON & Dynamic Javascript ([Demo](http://photos.jasondonenfeld.com/)) `Javascript` `GPLv2`
  * [PhotoLight](https://github.com/thibaud-rohmer/PhotoLight) - The easiest photo gallery there is `PHP` `GPLv3`
  * [Photoshow](http://www.photoshow-gallery.com/) - ([Source code](https://github.com/thibaud-rohmer/PhotoShow)) `Javascript` `GPLv3`
  * [Piwigo](http://piwigo.org/) - Photo gallery software for the web, built by an active community of users and developers. - `GPLv2` `PHP`
  * [Plumi](http://blog.plumi.org/) - create your own sophisticated video-sharing site ([Source code](https://github.com/plumi/plumi.app)) `GPLv2` `Python`
  * [Pygmyfoto](https://github.com/dmpop/pygmyfoto) - A crude solution for publishing a photo roll on the web `PHP` 
  * [Shot.io](http://shot.io/) - Mobile optimised photo publishing platform (self-hosted Flickr alternative) ([Source code](https://github.com/AliasIO/Shot.io)) `GPLv3` `PHP`
  * [sigal](https://github.com/saimn/sigal) - yet another simple static gallery generator `MIT` `Python`
  * [UberGallery](http://www.ubergallery.net) - UberGallery is an easy to use, simple to manage, web photo gallery. UberGallery does not require a database and supports JPEG, GIF and PNG file types. Simply upload your images and UberGallery will automatically generate thumbnails and output HTML. ([Source code](https://github.com/UberGallery/UberGallery)) `MIT` `PHP`
  * [Zenphoto](http://www.zenphoto.org/) - open-source gallery and CMS project ([Source code](https://github.com/zenphoto/zenphoto))  `GPLv2` `PHP`

## Polls and Events

  * [dudle](http://primelife.ercim.eu/results/opensource/63-dudle) - an online scheduling application ([demo](https://dudle.inf.tu-dresden.de/)) `AGPLv3` `Ruby`
  * [Kyélà](http://kyela.net/) -  Participation polls for group events  - ([Source code](https://github.com/abienvenu/Kyela), [Demo](http://kyela.net/55232734237c8/))
  * [LimeSurvey](https://www.limesurvey.org) - Feature-rich Open Source web based polling software. Supports extensive survey logic. - ([Demo](https://demo.limesurvey.org))
  * [MaterialPoll](https://github.com/nearbycoder/materialpoll) - an opensource strawpoll.me clone for creating random polls. - ([Source code](https://github.com/nearbycoder/materialpoll), [Demo](http://materialpoll.tk))
  * [OpenSondage](https://github.com/leblanc-simon/OpenSondage) - an online service for planning an appointment or make a decision quickly and easily: Make a poll, Define dates or subjects to choose, Send the poll link to your friends or colleagues, Discuss and make a decision - ([Demo](http://framadate.org/), [Example](https://framadate.org/aqg259dth55iuhwm))

## Proxy

  * [Oranjeproxy](http://lehollandaisvolant.net/tout/oranjeproxy/) - Anonymizing web proxy ([Source code](https://github.com/AmauryCarrade/OranjeProxy)) `GPLv2` `PHP`
  * [Privoxy](http://www.privoxy.org) - a non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk `GPLv2` `C`
  * [Swiperproxy](https://swiperproxy.github.io/) - A lightning-fast, open source web proxy that is easy for you to run and customize. ([Source code](https://github.com/swiperproxy/swiperproxy), [Demo](http://proxy.donttrustrobots.nl/)) - `MIT`

## Read it Later Lists

  * [Readityourself](https://github.com/memiks/readityourself) - read the web without ads, comments, or tweets ([Demo](http://www.readityourself.net/)) `MIT` `PHP`
  * [Wallabag](http://www.wallabag.org/?lang=fr_fr) - Wallabag, formerly Poche, is a web application allowing you to save articles to read them later with improved readability. ([Demo](http://demo.wallabag.org/), [Public instance](http://www.framabag.org/), [Source code](https://github.com/wallabag/wallabag) `MIT` `PHP`

## Search Engines

  * [Searx](https://github.com/asciimoo/searx) - A privacy-respecting, hackable metasearch engine ([Demo](https://searx.me/), [Public instances](https://github.com/asciimoo/searx/wiki/Searx-instances))
  * [Seeks](https://beniz.github.io/seeks/) - a websearch proxy and collaborative distributed tool for websearch. `AGPLv3` `C++`
  * [Yacy](http://yacy.net/en/index.html) - Peer based, decentralized search engine server `GPL2` `Java`


## Software Development

### Project Management

  * [Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki)  - Distributed version control system featuring wiki and bug tracker - `BSD` `C`
  * [gitbucket](http://takezoe.github.io/gitbucket/) - The easily installable GitHub clone powered by Scala - ([Source code](https://github.com/takezoe/gitbucket))
  * [GitLab](http://gitlab.org/) - Self Hosted Git Management Application - GitLab is open source software to collaborate on code. Manage git repositories with fine grained access controls that keep your code secure. Perform code reviews and enhance collaboration with merge requests. Each project can also have an issue tracker and a wiki ([Public instance](https://git.framasoft.org/))
  * [Gitlist](http://gitlist.org/) - A web-based git repository browser - GitList allows you to browse repositories using your favorite browser, viewing files under different revisions, commit history and diffs. ([Source code](https://github.com/klaussilveira/gitlist))
  * [Gitprep](http://gitprep.org/) - Portable Github clone ([Source code](https://github.com/yuki-kimoto/gitprep), [Demo](http://perlcodesample.sakura.ne.jp/gitprep.cgi))
  * [Gogs](https://github.com/gogits/gogs) - a painless self-hosted Git Service written in Go. ([Demo](http://try.gogits.org))

### IDE/Tools

  * [Codiad](http://codiad.com/) - a web-based IDE framework with a small footprint and minimal requirements. ([Source code](https://github.com/Codiad/Codiad))
  * [JS Bin](http://jsbin.com/) - open source collaborative web development debugging tool ([Source Code](https://github.com/jsbin/jsbin)) `MIT` `Nodejs`
  * [Pairjam](http://pairjam.com/) -  Real-time web-based collaborative coding ([Source code](https://github.com/neerajwahi/pairjam))
  * [Regexr](http://regexr.com/) -  RegExr is a HTML/JS based tool for creating, testing, and learning about Regular Expressions. ([Source code](https://github.com/gskinner/regexr/)) `MIT` `Nodejs`
  * [Repo.js](http://darcyclarke.me/dev/repojs/) - A plugin to embed Github repos on your site ([Source code](https://github.com/darcyclarke/Repo.js))

### Continuous Integration

  * [Jenkins](https://jenkins-ci.org/) - Continuous Integration Server ([Source Code](https://github.com/jenkinsci/jenkins/)) `MIT` `Java`

### Bug and Task Trackers

  * [92five](http://92fiveapp.com/) - Self hosted project management application ([Source code](https://github.com/chintanbanugaria/92five)) `CC BY-NC 4.0` `PHP`
  * [Apache Bloodhound](https://bloodhound.apache.org/) - Manage software products, Keep track of features, tasks and bugs `Apache` `Python`
  * [bulldog](https://github.com/infews/bulldog) - HTML5 task manager, built on todo.txt `MIT` `HTML5` 
  * [Bumpy Booby](http://bumpy-booby.derivoile.fr/) - A simple, responsive and highly customizable PHP bug tracking system. ([Source code](https://github.com/piero-la-lune/Bumpy-Booby)) `MIT` `PHP`
  * [Crepido](https://github.com/arshad/crepido) - Create (kanban) boards to track users and projects from flat markdown files `MIT` `Javascript/Others`
  * [Flyspray](http://www.flyspray.org/) - uncomplicated, web-based bug tracking system ([Source code](https://github.com/Flyspray/flyspray)) `GPLv2`
  * [Gaskit](https://github.com/bkeepers/gaskit) - a git-backed issue tracker. It uses a branch in your local git database to store the tickets. `GPL`
  * [HabitRPG](http://habitrpg.com/) - A habit tracker app which treats your goals like a Role Playing Game. ([Source code](https://github.com/lefnire/habitrpg))
  * [Kanboard](http://kanboard.net/) - A simple and open source visual task board `AGPLv3`
  * [MantisBT](https://www.mantisbt.org/) - Self hosted bug tracker, fits best for software development - ([Demo](https://www.mantisbt.org/bugs/my_view_page.php)) -  ([Source code](https://github.com/mantisbt/mantisbt)) - `GPLv2`
  * [myTinyTodo](http://www.mytinytodo.net/) - Simple way to manage your todo list in AJAX style. Uses PHP, jQuery, SQLite/MySQL. GTD compliant. `GPL`
  * [Phproject](http://www.phproject.org/) - A high performance full-featured project management system ([Source code](https://github.com/Alanaktion/phproject), [Demo](http://demo.phproject.org/)) `GPLv3`
  * [Redmine](http://www.redmine.org/) - Redmine is a flexible project management web application `Ruby` `GPLv2`
  * [Taiga.io](https://taiga.io/) - Your Agile, Free and Open Source Project Management Tool ([Source code](https://github.com/taigaio))
  * [TaskBoard](http://taskboard.matthewross.me/) - A Kanban-inspired app for keeping track of things that need to get done. ([Source code](https://github.com/kiswa/TaskBoard)) `MIT`
  * [Taskfreak](http://www.taskfreak.com/original) - a simple but efficient web based task manager written in PHP. ([Demo](http://demo.taskfreak.com/))
  * [tasks.php](https://github.com/RaymiiOrg/tasks.php) - A simple task/todo list manager `MIT`
  * [Tinyissue](https://github.com/mikelbring/tinyissue) - Simple Issue Tracking for Teams `MIT`
  * [Tracks](http://getontracks.org/) -  a web-based application to help you implement David Allen’s [Getting Things Done™](http://wikipedia.org/wiki/Getting_Things_Done) methodology. - `GPLV2`

## Static site generators

See https://staticsitegenerators.net and https://www.staticgen.com

## URL Shorteners

  * [Lstu](https://github.com/ldidry/lstu) - _Let's SHorten That Url_ - Lightweight URL shortener
  * [Polr](http://project.polr.me/) - A modern, minimalist, modular, and lightweight URL shortener ([Source code](https://github.com/Cydrobolt/polr))
  * [YOURLS](http://yourls.org/) - YOURLS is a set of PHP scripts that will allow you to run Your Own URL Shortener. Features include password protection, URL customization, bookmarklets, statistics, API, plugins, jsonp ([Source code](https://github.com/YOURLS/YOURLS/), [Documentation](https://github.com/YOURLS/YOURLS/wiki)) - `MIT`


## Wikis

  * **[Wikimatrix](http://www.wikimatrix.org/) - A wiki platforms comparator**
  * [Blazekiss](https://github.com/ldleman/blazekiss) - BlazeKiss is a KISS-based wiki (Keep It Simple, Stupid) - simplicity and functionality comes before all.
  * [Codex](http://codex.caffeinated.ninja/codex/master) - Codex is a simple file-based Markdown documentation platform built on top of Laravel. - `MIT`
  * [commonplace](https://github.com/fredoliveira/commonplace) - A server for your markdown files. Give it a directory, and Commonplace gives you a url, pretty pages, and quick editing.
  * [daux.io](https://github.com/justinwalsh/daux.io) - Daux.io is an documentation generator that uses a simple folder structure and Markdown files to create custom documentation on the fly. It helps you create great looking documentation in a developer friendly way. `MIT`
  * [Docstore](http://haldean.org/) - A basic site for hosting static documents - docstore is a simple way to serve Markdown files without any server-side processing, and without requiring you (as the author) to recompile every time you change an article. It consists of a very simple JS script that makes an ajax request to your server, runs a Markdown processor on what it finds, and then displays the results. Clone the repository and add articles in the text/ directory to get started. ([Source code](https://github.com/haldean/docstore))
  * [Dokuwiki](http://www.splitbrain.org/projects/dokuwiki) - An easy to use, lightweight, standards-compliant wiki engine with a simple syntax allowing reading the data outside the wiki. All data is stored in plain files, therefore no database is required. - `GPL`
  * [Gitit](https://github.com/jgm/gitit) - A wiki program that stores pages and uploaded files in a git repository, which can then be modified using the VCS command line tools or the wiki's web interface. Supported markups include pandoc's extended version of markdown, reStructuredText, LaTeX, and HTML. Pages can be exported in a number of different formats, including LaTeX, RTF, OpenOffice ODT, and MediaWiki markup. Other features include: plugins, syntax highlighting, caching, ATOM feeds
  * [Gruik](http://gruik.io/) - An open-source markdown note-taking web app ([Source code](https://github.com/grena/gruik))
  * [markdown-tree](https://github.com/mil/markdown-tree) - serve a hierarchy / tree directory of markdown files. Use intended for small sites built in markdown
  * [MdWiki](https://dynalon.github.io/mdwiki/#!index.md) - a Markdown CMS/Wiki completely built in HTML5/Javascript and runs 100% on the client ([Source code](https://github.com/Dynalon/mdwiki))
  * [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki)
  * [Olelo/Gitwiki](https://github.com/minad/olelo) - Olelo is a wiki that stores pages in a Git repository, supports many markup styles and has an extensible, hackable architecture! Features: Edit, move or delete pages; Page attribute editor; Support for hierarchical wikis (directory structure); File upload; History, commit and diff view; Locales (Czech, English, French, German); Support for many markup languages (Creole, Markdown, Textile); RSS/Atom changelog for whole wiki or pages; Section editing for Creole; Embedded LaTeX formulas; Syntax highlighting; Image resizing, SVG to PNG/JPEG conversion; Auto-generated table of contents; Previews; View pages as S5 presentation; Privacy features: Access control lists, Private wiki, Read-only wiki. ([Demo](http://www.gitwiki.org/)) 
  * [Raneto](http://raneto.com/) - Raneto is an open source Knowledgebase platform that uses static Markdown files to power your Knowledgebase - `MIT`
  * [Realms](https://github.com/scragg0x/realms-wiki) - a git-backed wiki inspired by Gollum
  * [Redaxscript](http://redaxscript.com/) - Ultra lightweight website engine
  * [TiddlyWiki](http://tiddlywiki.com/) - a reusable non-linear personal web notebook
  * [WiKiss](http://wikiss.tuxfamily.org/) - un wiki simple à utiliser et déployer.
  * [Wikitten](https://github.com/victorstanciu/Wikitten) - Wikitten is a small, fast, PHP wiki, and the perfect place to store your notes, code snippets, ideas, and so on.

-------------------------------------------------------

## Self-hosting Solutions

  * [arkOS](https://arkos.io/) - Install arkOS to a dedicated device and host your own websites, email, files and more. ([Source code](https://git.coderouge.co/groups/arkOS) [[1]](https://github.com/cznweb)) `MIT/GPL` `Nodejs/Other`
  * [Sandstorm](https://sandstorm.io/) - Personal server for running self-hosted apps easily and securely. ([Demo](https://demo.sandstorm.io/), [Source code](https://github.com/sandstorm-io/sandstorm)) `Apache` `C++/Other`
  * [sovereign](https://github.com/sovereign/sovereign) -  A set of Ansible playbooks to build and maintain your own private cloud: email, calendar, contacts, file sync, IRC bouncer, VPN, and more. `GPLv3` `YAML/Other`
  * [yunohost](https://yunohost.org/) - a server operating system aiming to make self-hosting accessible to everyone. ([Source code](https://github.com/YunoHost)) - `AGPL` `Python/Other`

-------------------------------------------------------



## List of Licenses

 * `AGPLv3` - [GNU Affero General Public License 3.0](https://www.gnu.org/licenses/agpl-3.0)
 * `Apache` - [Apache, Version 2.0](http://www.apache.org/licenses/)
 * `ARTv2` - [Artistic License Version 2.0](http://opensource.org/licenses/Artistic-2.0)
 * `BSD` - [FreeBSD License](https://www.freebsd.org/copyright/license.html)
 * `CPALv1` - [Common Public Attribution License Version 1.0](http://opensource.org/licenses/CPAL-1.0)
 * `GPL` - [GNU General Public License](https://www.gnu.org/licenses/gpl-1.0)
 * `GPLv2` - [GNU General Public License 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
 * `GPLv3` - [GNU General Public License 3.0](http://www.gnu.org/licenses/gpl-3.0.en.html)
 *  `MIT` - [MIT License](http://opensource.org/licenses/MIT)
 *  `MPL` - [Mozilla Public License](https://www.mozilla.org/MPL/2.0/index.txt)


-------------------------------------------------------
## External links

 * [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin) -  A curated list of amazingly awesome open source sysadmin resources.
 * [PRISM Break](https://prism-break.org/en/), [Privacytools.io](https://www.privacytools.io/) - Mobile, computer & server privacy-minded applications
 * [Self-hostable software on alternativeTo.net](https://alternativeto.net/?platform=self-hosted&sort=likes)


-------------------------------------------------------

## Contributing

 * You can help by sending Pull Requests to add more services. See [Editing files](https://help.github.com/articles/editing-files-in-another-user-s-repository/), [Creating Pull Requests](https://help.github.com/articles/creating-a-pull-request/), [Using Pull Requests](https://help.github.com/articles/using-pull-requests/)
 * Sections should be ordered alphabetically, lines inside sections should be ordered alphabetically.
 * All projects should have their license and main programming language referenced.
 * Non-[Free](https://en.wikipedia.org/wiki/Free_software) software must be marked `⊘ Proprietary` next to the title, and added to [non-free.md](non-free.md)
 * Software with no development activity for 6-12 months may be removed from the list.
 * The syntax for links is ``[Name](http://homepage/) - Short description ([Demo](http://url.to/demo), [Source code](http://url.of/source/code)) `License` `Language` ``
 * Please limit the short description of the project to **250 characters**.
 * The list of contributors can be updated with `git shortlog -sne`

## License

This list is under the [Creative Commons Attribution-ShareAlike 3.0 Unported](LICENSE) License.


The list of contributors can be found below

    77  nodiscc <nodiscc@gmail.com>
    68  Edward D <ed.kickball@hotmail.com>
    12  Kickball <ed.kickball@hotmail.com>
    12  jungle-boogie <sean@jungleboogie.me>
     7  Thomas Dalichow <info@thomasdalichow.de>
     6  Kovah <mail@kovah.de>
     6  Thomas Dalichow <2012-02-05.github.com@thomasdalichow.de>
     5  Moti Korets <moti.kor@gmail.com>
     3  Jan Vlnas <jnv@users.noreply.github.com>
     3  Mariusz Kozakowski <11mariom+wordpress@gmail.com>
     3  Martin Gontovnikas <martin@gon.to>
     3  Ye Lin Aung <me@yelinaung.com>
     3  jungle-boogie <sean@rastasean.net>
     3  rett gerst <rettgerst@users.noreply.github.com>
     2  Charles Farence III <charles@charlessite90.com>
     2  Costin Moise <necenzurat@gmail.com>
     2  Deryck <dhenson02@users.noreply.github.com>
     2  Greg V <greg@unrelenting.technology>
     2  Joseph Dykstra <josephdykstra@gmail.com>
     2  Marien Fressinaud <dev@marienfressinaud.fr>
     2  Mikael Peigney <Mika56@users.noreply.github.com>
     2  Patrik Ragnarsson <patrik@starkast.net>
     2  Peter Thaleikis <spekulatius@users.noreply.github.com>
     2  Poorchop <Poorchop@users.noreply.github.com>
     2  Stefano <sabas88@gmail.com>
     2  Thomas Citharel <tcit@tcit.fr>
     2  cron410 <cron410@gmail.com>
     2  jimykk <JimyKK@users.noreply.github.com>
     2  phre4k <me@phre4k.at>
     2  yuche <i@yuche.me>
     1  Caleb Xu <calebcenter@live.com>
     1  Calle Wolff <carl@wolff.se>
     1  Dan <rocks.in.the.cloud@gmail.com>
     1  Dražen Lučanin <kermit666@gmail.com>
     1  Igor Antun <IgorAntun@users.noreply.github.com>
     1  Jean Elchinger <jinformatique@riseup.net>
     1  Jeremiah Marks <jeremiah@jlmarks.org>
     1  Joel Calado <joelcalado@gmail.com>
     1  Joshua Hamilton <joshua.hamilton@fabricut.com>
     1  Keith Thibodeaux <kthibodeaux@peachtreebilling.com>
     1  Marcus Ramberg <marcus@nordaaker.com>
     1  MatFluor <MatFluor@users.noreply.github.com>
     1  Remy Honig <remyhonig@users.noreply.github.com>
     1  Stefan Bohacek <stefan.bohacek@gmail.com>
     1  Stefan Bohacek <stefan@fourtonfish.com>
     1  bricej13 <bricej13@gmail.com>
     1  skarphet <skarphet@users.noreply.github.com>
     1  steven jacobs <stjacobs@fastmail.fm>
     1  stevesbrain <stevesbrain@users.noreply.github.com>
     1  ttoups <ich@timotoups.de>
