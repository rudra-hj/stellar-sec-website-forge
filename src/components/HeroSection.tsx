import { Button } from "@/components/ui/button";
import { Shield, Code, Globe, Users } from "lucide-react";

export const HeroSection = () => {
  // Smooth scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Main section container
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Terminal Background Animation */}
      <div className="absolute inset-0 bg-cybersec-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cybersec-dark/60 to-cybersec-dark z-10 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            className="font-mono text-lg text-green-500/20 whitespace-pre p-4"
            style={{ minHeight: '10%' }}>
            <div className="animate-[terminal-scroll_90s_steps(160,end)_infinite]">
                {`
[  OK  ] Finished plymouth-read-write.service - Tell Plymouth To Write Out Runtime Data.
[  OK  ] Mounted proc-sys-fs-binfmt_misc.mount - Arbitrary Executable File Formats File System.
[  OK  ] Finished systemd-binfmt.service - Set Up Additional Binary Formats.
[  OK  ] Finished systemd-tmpfiles-setup.service - Create System Files and Directories.
        Mounting run-rpc_pipefs.mount - RPC Pipe File System...
        Starting rpcbind.service - RPC bind portmap service...
        Starting systemd-resolved.service - Network Name Resolution...
        Starting systemd-timesyncd.service - Network Time Synchronization...
        Starting systemd-update-utmp.service - Record System Boot/Shutdown in UTMP...
[  OK  ] Started rpcbind.service - RPC bind portmap service.
[  OK  ] Reached target rpcbind.target - RPC Port Mapper.
[  OK  ] Finished systemd-update-utmp.service - Record System Boot/Shutdown in UTMP.
[  OK  ] Mounted run-rpc_pipefs.mount - RPC Pipe File System.
[  OK  ] Reached target rpc_pipefs.target.
[  OK  ] Reached target nfs-client.target - NFS client services.
[  OK  ] Reached target remote-fs-pre.target - Preparation for Remote File Systems.
[  OK  ] Reached target remote-fs.target - Remote File Systems.
[  OK  ] Finished apparmor.service - Load AppArmor profiles.
        Starting networking.service - Raise network interfaces...
[  OK  ] Started systemd-timesyncd.service - Network Time Synchronization.
[  OK  ] Reached target time-set.target - System Time Set.
[  OK  ] Started systemd-resolved.service - Network Name Resolution.
[  OK  ] Reached target nss-lookup.target - Host and Network Name Lookups.
[  OK  ] Reached target sysinit.target - System Initialization.
[  OK  ] Started cups.path - CUPS Scheduler.
[  OK  ] Started anacron.timer - Trigger anacron every hour.
[  OK  ] Started apt-daily.timer - Daily apt download activities.
[  OK  ] Started apt-daily-upgrade.timer - Daily apt upgrade and clean activities.
[  OK  ] Started dpkg-db-backup.timer - Daily dpkg database backup timer.
[  OK  ] Started e2scrub_all.timer - Periodic ext4 Online Metadata Check for All Filesystems.
[  OK  ] Started exim4-base.timer - Daily exim4-base housekeeping.
[  OK  ] Started fstrim.timer - Discard unused blocks once a week.
[  OK  ] Started fwupd-refresh.timer - Refresh fwupd metadata regularly.
[  OK  ] Started laptop-mode.timer - Runs Laptop Mode Tools - Polling Service, every 150 seconds.
[  OK  ] Started logrotate.timer - Daily rotation of log files.
[  OK  ] Started man-db.timer - Daily man-db regeneration.
[  OK  ] Started systemd-tmpfiles-clean.timer - Daily Cleanup of Temporary Directories.
[  OK  ] Reached target paths.target - Path Units.
[  OK  ] Reached target timers.target - Timer Units.
[  OK  ] Listening on avahi-daemon.socket - Avahi mDNS/DNS-SD Stack Activation Socket.
[  OK  ] Listening on cups.socket - CUPS Scheduler.
[  OK  ] Listening on dbus.socket - D-Bus System Message Bus Socket.
        Starting docker.socket - Docker Socket for the API...
[  OK  ] Listening on libvirtd.socket - Libvirt local socket.
[  OK  ] Listening on libvirtd-admin.socket - Libvirt admin socket.
[  OK  ] Listening on libvirtd-ro.socket - Libvirt local read-only socket.
[  OK  ] Listening on pcscd.socket - PC/SC Smart Card Daemon Activation Socket.
[  OK  ] Listening on virtlockd.socket - Virtual machine lock manager socket.
                `
                .repeat(150)}
            </div>
          </div>
        </div>
      </div>
  

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-sm font-medium text-primary">
              Entrepreneur & Ingénieur Système 
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Salut, je suis <span className="tech-gradient">Rudra</span>,<br />
              passionné de Linux & Open Source
            </h1>

            <p className="text-lg text-gray-300 max-w-lg">
              Je conçois des solutions libres, sécurisées et évolutives pour transformer vos défis techniques en réussites durables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-6" onClick={() => scrollToSection('contact')}>
                Contactez-moi
              </Button>
              <Button size="lg" variant="outline" className="px-6" onClick={() => scrollToSection('Projets')}>
                Voir mes projets
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Sécurité & Robustesse</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Passion Open Source</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Esprit Entrepreneurial</p>
              </div>
            </div>
          </div>

          {/* Zone de script inspirant */}
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl" />
            <div className="relative backdrop-blur-sm bg-cybersec-light/10 border border-white/10 rounded-2xl p-8 shadow-lg">
              <pre className="text-xs md:text-sm font-mono text-gray-200 leading-snug">
                <code>
                  <span className="text-blue-400">#!/usr/bin/env bash</span>
                  <br />
                  <span className="text-green-400"># Script: building_better_world.sh</span>
                  <br /><br />
                  <span className="text-yellow-300">function</span> <span className="text-red-400">deploy_hope</span>() {'{'}
                  <br />  <span className="text-purple-400">echo</span> "Deployment of hope..."
                  <br />  <span className="text-gray-400">kubectl apply -f hope_manifest.yaml</span>
                  <br />{'}'}
                  <br />
                  <span className="text-yellow-300">function</span> <span className="text-red-400">scale_impact</span>() {'{'}
                  <br />  <span className="text-purple-400">echo</span> "Scaling positive impact..."
                  <br />  <span className="text-gray-400">helm upgrade impact ./chart --set replicas=infinite</span>
                  <br />{'}'}
                  <br />
                  <span className="text-yellow-300">function</span> <span className="text-red-400">monitor_progress</span>() {'{'}
                  <br />  <span className="text-purple-400">echo</span> "Monitoring progress..."
                  <br />  <span className="text-gray-400">prometheus-cli --query="world_progress"</span>
                  <br />{'}'}
                  <br /><br />
                  <span className="text-green-400"># Exécution</span>
                  <br />deploy_hope
                  <br />scale_impact
                  <br />monitor_progress
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};