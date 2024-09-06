<script>
  import "../app.pcss";
  import "@fontsource/inter";
  import "@fontsource/inter/600.css";
  import "@fontsource/inter/700.css";
  import { RESUME_DATA } from "$lib/data";
</script>

<svelte:head>
  <title>Rodrigo Palmeirim | Software Engineer</title>
  <link rel="icon" href={RESUME_DATA.avatarUrl} />
</svelte:head>
<slot />
