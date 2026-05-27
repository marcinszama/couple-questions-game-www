import { ProfileScores, QuizResponse, QuizResult, ProfileResult } from "@/lib/conflictQuiz/types";
import { conflictQuizQuestions } from "./questions";

export const profileDescriptions = {
  expresser: {
    name: "The Expresser",
    emoji: "🔥",
    corePattern: "You communicate with energy, emotion, and immediacy. When something matters to you, it shows—in your voice, your body language, and your urgency to address it.",
    strengths: [
      "You're authentic and direct—people always know where they stand with you",
      "You bring passion and energy that can make conversations feel alive and real",
      "You're not afraid to address issues head-on rather than letting them fester",
      "Your emotions help you connect deeply when channeled well",
      "You create momentum toward resolution instead of letting problems linger"
    ],
    challenges: [
      "Your intensity can overwhelm partners who need calm to process information",
      "You might say things in the heat of the moment you later regret",
      "Others may feel attacked even when you're just being passionate about the topic",
      "You can struggle with the \"pause button\" when emotions run high",
      "Your urgency to resolve things NOW can pressure your partner before they're ready"
    ],
    inConflict: "You tend to escalate quickly—your voice gets louder, your emotions bigger, your words sharper. You want resolution immediately, and silence or withdrawal from your partner can feel unbearable. You might chase them for answers or inadvertently corner them when they need space. Your body language becomes animated, and you might gesture emphatically or move closer when your partner is pulling away.",
    workingOn: "Learning to recognize your emotional escalation *before* it peaks. The key is developing the ability to feel your intensity rising and consciously choose to slow down. Practice the pause: \"I feel strongly about this AND I want to communicate it in a way my partner can actually hear.\" You're working on expressing your authentic emotions while regulating their delivery. This doesn't mean becoming less passionate—it means becoming more effective at being heard.",
    relationshipsWith: {
      withdrawer: "You'll tend to chase when they retreat, which pushes them further away. Your work is learning that backing off actually helps them come back faster.",
      harmonizer: "Your intensity can make them shrink and agree just to end the discomfort. You'll need to create safety for them to disagree with you.",
      expresser: "You both escalate together, which can feel validating initially but becomes explosive quickly. You'll need to take turns de-escalating.",
      analyzer: "Your emotion can feel overwhelming to their logic. They need you to slow down; you need them to engage emotionally.",
      pursuer: "You both want immediate resolution, which can work well, but you'll need to manage the intensity together.",
      secure: "They can handle your energy without matching it, which helps you stay grounded. They're good mirrors for the communication style you're building toward."
    }
  },
  withdrawer: {
    name: "The Withdrawer",
    emoji: "🚪",
    corePattern: "When conflict arrives, your instinct is to retreat. You need space to process, calm down, and figure out what you actually think and feel before engaging.",
    strengths: [
      "You rarely say things you don't mean because you think before speaking",
      "You avoid unnecessary escalation and keep conflicts from spiraling out of control",
      "You're thoughtful and intentional with your words when you do speak",
      "You create space for emotions to settle before attempting problem-solving",
      "You protect the relationship from damage that happens in heated moments"
    ],
    challenges: [
      "Your silence can feel like abandonment or punishment to your partner",
      "You might avoid necessary conversations altogether, not just postpone them",
      "Important issues can get swept under the rug indefinitely",
      "Your partner may feel shut out of your inner world during the times they most need connection",
      "You might physically leave situations before signaling when or if you'll return"
    ],
    inConflict: "You shut down, leave the room, or go emotionally cold. While you're protecting yourself and trying to stay regulated, your partner often experiences this as rejection or stonewalling. You genuinely need the space—it's not manipulation—but the way you take it can feel abrupt or punishing to others. You might also tune out mentally while physically present, which can be even more frustrating for your partner than if you actually left.",
    workingOn: "Learning to communicate *that* you need space and *when* you'll return. \"I need 20 minutes to process this, then I'll come back and we can talk\" is transformative for your relationships. You're also working on distinguishing between \"I need a pause\" and \"I want to avoid this forever.\" The goal isn't to stop needing space—that's legitimate—but to take it in a way that maintains connection. Consider whether you're withdrawing to regulate (healthy) or to avoid/punish (less healthy).",
    relationshipsWith: {
      pursuer: "This is the classic pursue-withdraw dynamic. The more they chase, the more you retreat. You'll need to practice returning to conversations even when uncomfortable.",
      expresser: "Their intensity triggers your shutdown response quickly. You'll need to communicate your limits before you hit them, not after you're already checked out.",
      withdrawer: "You both go silent and nothing gets resolved. You'll need to designate one person to initiate repair, even when it's uncomfortable.",
      harmonizer: "They might not push you to return, which can feel comfortable but allows avoidance. You'll need to come back on your own.",
      analyzer: "You can both get stuck in your heads. Make sure someone is bringing emotion and vulnerability to balance the intellectualizing.",
      secure: "They'll respect your need for space while holding you accountable to return. They model the balance you're working toward."
    }
  },
  analyzer: {
    name: "The Analyzer",
    emoji: "🧠",
    corePattern: "You approach conflict like a puzzle to solve. You want to understand all the angles, consider everyone's perspective, and find the logical path forward.",
    strengths: [
      "You stay remarkably calm during heated moments when others are losing composure",
      "You're fair-minded and can genuinely see multiple perspectives simultaneously",
      "You ask good questions that get to the root of issues rather than staying surface-level",
      "You're solution-oriented and practical about next steps",
      "You can separate the problem from the person and focus on the issue"
    ],
    challenges: [
      "You can seem emotionally distant or \"in your head\" during conflicts when your partner needs emotional presence",
      "Your partner may feel like a problem to solve rather than a person to connect with",
      "You might prioritize being \"right\" or \"accurate\" over being close",
      "Emotional expression can feel messy, inefficient, or illogical to you",
      "You may intellectualize emotions rather than actually feeling and expressing them"
    ],
    inConflict: "You retreat into logic and analysis. While your partner is feeling big emotions, you're dissecting the situation rationally. You ask clarifying questions when they want empathy. You want to \"fix it\" and move forward when they want to be heard and understood first. You might say things like \"But logically...\" or \"From an objective standpoint...\" when your partner is sharing something deeply emotional. You're comfortable in the realm of ideas but can struggle when raw feelings enter the conversation.",
    workingOn: "Remembering that relationships require emotional validation before problem-solving. Practice saying \"That makes sense that you'd feel that way\" or \"I can see why that hurt you\" before offering any solutions or alternative perspectives. You're learning that sometimes your partner doesn't need you to fix anything—they need you to feel *with* them. This doesn't mean abandoning your analytical strengths; it means adding emotional attunement to your toolkit. Work on noticing when you're using analysis as a defense against feeling.",
    relationshipsWith: {
      expresser: "Your calm can feel dismissive when they're passionate. They need to see that their emotions impact you, not just your thoughts.",
      pursuer: "They want emotional engagement and reassurance; you offer logic. You'll need to lead with feeling before analysis.",
      analyzer: "You can have very productive problem-solving sessions but might miss the emotional intimacy that sustains relationships.",
      harmonizer: "They need more emotional warmth and validation than you naturally offer. Make your care explicit, not assumed.",
      withdrawer: "You both retreat (you into your head, them into space). Someone needs to initiate emotional reconnection.",
      secure: "They model how to balance emotion and logic, which is exactly what you're developing."
    }
  },
  harmonizer: {
    name: "The Harmonizer",
    emoji: "🕊️",
    corePattern: "You prioritize peace and connection above almost everything else. Conflict feels threatening to the relationship, so you work hard to smooth things over and keep everyone comfortable.",
    strengths: [
      "You're empathetic and deeply attuned to your partner's emotional state",
      "You create warmth and safety in relationships that allows vulnerability",
      "You're quick to apologize and repair after conflict, maintaining connection",
      "You're flexible and easy to be with day-to-day",
      "You notice subtle shifts in mood and atmosphere before others do"
    ],
    challenges: [
      "You avoid necessary conflict, letting resentments build beneath the surface",
      "You might lose yourself trying to keep the peace, neglecting your own needs",
      "Your partner never knows when you're actually upset because you hide it so well",
      "You can become passive-aggressive when needs go unmet for too long",
      "You say \"it's fine\" when it's decidedly not fine, creating confusion"
    ],
    inConflict: "You minimize your own needs, agree too quickly just to end the discomfort, or hint at problems without directly stating them. You might also use phrases like \"I'm fine\" or \"Don't worry about it\" while your body language and tone clearly indicate otherwise. You're more likely to cry from frustration than to express anger directly. Your avoidance is different from Withdrawers—you're not seeking space to process, you're seeking peace at any cost, even if it means sacrificing your own voice in the relationship.",
    workingOn: "Learning that healthy conflict actually *creates* intimacy rather than destroying it. Your relationship can handle you having needs, boundaries, and occasionally being disappointed or angry. You're working on trusting that disagreement won't end in abandonment. Practice saying \"Actually, that doesn't work for me\" or \"I need something different\" even when it creates temporary tension. The discomfort you're avoiding in the moment often creates bigger problems long-term. You're learning that being real—even when it's not peaceful—is more intimate than being endlessly accommodating.",
    relationshipsWith: {
      expresser: "Their intensity makes you want to shrink and agree. You'll need to practice staying present with disagreement without immediately folding.",
      pursuer: "They want you to engage, but their pressure makes you agree too quickly. Work on saying \"I need time to think about what I actually want.\"",
      harmonizer: "Neither of you will address real issues, creating a pleasant surface with unspoken resentments underneath.",
      withdrawer: "They might not notice your subtle hints, and you won't push them. Someone needs to initiate direct conversations.",
      analyzer: "Their emotional distance can feel safe, but you'll both avoid the vulnerability that creates deeper intimacy.",
      secure: "They can gently draw you out and create safety for you to express needs. They show you that conflict can be connecting."
    }
  },
  pursuer: {
    name: "The Pursuer",
    emoji: "🏃",
    corePattern: "When something's wrong, you need to address it immediately. Distance, silence, or \"tabling it for later\" feels intolerable. You pursue connection, answers, and resolution with determination.",
    strengths: [
      "You ensure problems get addressed rather than swept under the rug",
      "You're deeply invested in the relationship's health and won't give up easily",
      "You're persistent about working through issues until they're truly resolved",
      "You value closeness and emotional connection as priorities",
      "You bring energy and urgency to relationship maintenance"
    ],
    challenges: [
      "Your pursuit can feel like pressure, interrogation, or even attack to your partner",
      "You struggle to give your partner space even when they explicitly ask for it",
      "You can catastrophize when your partner withdraws, imagining worst-case scenarios",
      "You might prioritize resolution over your partner's emotional readiness to engage",
      "You can't relax until things feel \"settled,\" which means your partner can't either"
    ],
    inConflict: "You follow your partner from room to room, send multiple texts when they've gone quiet, or demand they \"just talk to me right now.\" You might stand in doorways, ask the same questions repeatedly in different ways, or bring up the issue again just as things are calming down. While you're motivated by connection and fear of losing it, your partner often experiences this as suffocating, controlling, or overwhelming. Your anxiety about disconnection ironically creates more distance.",
    workingOn: "Learning that space doesn't equal abandonment. Sometimes the fastest route to reconnection is giving your partner room to breathe and come back on their own. You're working on tolerating the discomfort of unresolved issues without forcing immediate resolution. Practice noticing the difference between \"This needs to be discussed now for safety reasons\" and \"I'm anxious and need reassurance.\" You're developing the ability to self-soothe instead of requiring your partner to regulate your emotions for you. This doesn't mean you stop caring about connection—it means you pursue it more effectively.",
    relationshipsWith: {
      withdrawer: "This creates the classic pursue-withdraw cycle. The more you chase, the more they flee. Your work is learning to stop pursuing and trust they'll return.",
      expresser: "They'll engage with your intensity, which can feel good initially, but you both might escalate quickly without breaks.",
      pursuer: "You both want immediate resolution and emotional connection, which can work well if you're aligned, but can also amplify anxiety.",
      harmonizer: "They'll agree with you to end the pursuit, but you won't get their authentic feelings. You'll need to create more space for their truth.",
      analyzer: "Your emotion feels overwhelming to their logic. You need them to engage feelings; they need you to slow down and think.",
      secure: "They can engage with you without matching your urgency, which helps you feel heard without escalating. They model secure attachment."
    }
  },
  secure: {
    name: "The Secure Communicator",
    emoji: "✨",
    corePattern: "You've developed the ability to stay present during conflict, express your needs clearly, and respond to your partner with empathy—even when it's hard.",
    strengths: [
      "You can self-regulate during emotional moments without shutting down or exploding",
      "You use \"I\" statements naturally and take responsibility for your part",
      "You validate your partner's feelings even when you disagree with their perspective",
      "You can tolerate discomfort without needing to immediately escape or resolve it",
      "You seek repair and reconnection after conflict and know how to initiate it",
      "You're aware of your own patterns and actively work on them"
    ],
    challenges: [
      "You might expect your partner to have the same communication skills (they might not yet)",
      "You can still have off days where old patterns and triggers emerge",
      "You might carry more emotional labor in the relationship, which can be exhausting",
      "Your partner's dysregulation can pull you off center if you're not protecting your own grounding",
      "You might feel frustrated when your partner doesn't meet you at your level"
    ],
    inConflict: "You stay relatively grounded. You might feel activated internally—heart racing, emotions rising—but you can pause, breathe, and choose your response rather than reacting automatically. You say things like \"I hear you, and I see this differently\" or \"I need a 10-minute break, then let's finish this conversation.\" You can apologize genuinely when you've made a mistake without over-apologizing or defending. You remember that you're on the same team even when you disagree about the problem.",
    workingOn: "Even secure communicators can improve. Your work is modeling healthy conflict for your partner while maintaining your own boundaries and not becoming the relationship's sole emotional regulator. You're learning when to stretch to meet your partner and when stretching becomes self-abandonment. You're also working on having compassion for your partner's learning curve—they didn't get the same relationship education you did, and they're doing their best. Continue investing in your own growth through therapy, reading, or couples work so you don't become complacent.",
    relationshipsWith: {
      expresser: "You can handle their intensity without escalating, which helps them calm down. Model the pause they're learning.",
      withdrawer: "You can give them space while staying connected, which is exactly what they need. Just don't let them avoid indefinitely.",
      pursuer: "You can engage with them without matching their urgency, which soothes their anxiety about connection.",
      harmonizer: "You can create safety for them to express needs. Gently invite their authentic feelings, even the uncomfortable ones.",
      analyzer: "You can bring emotional presence while respecting their need to understand. You bridge logic and feeling.",
      secure: "This is the easiest dynamic. You both have the skills to navigate conflict, repair well, and grow together."
    }
  }
};

export function calculateQuizResults(responses: QuizResponse[], selectedGoals: string[]): QuizResult {
  const scores: ProfileScores = {
    pursuer: 0,
    withdrawer: 0,
    analyzer: 0,
    harmonizer: 0,
    expresser: 0,
    secure: 0
  };

  // Calculate scores from responses
  responses.forEach(response => {
    const question = conflictQuizQuestions.find(q => q.id === response.questionId);
    if (!question) return;

    response.selectedOptions.forEach(optionId => {
      const option = question.options.find(o => o.id === optionId);
      if (!option) return;

      Object.entries(option.scores).forEach(([profile, points]) => {
        scores[profile as keyof ProfileScores] += points;
      });
    });
  });

  // Sort profiles by score
  const sortedProfiles = (Object.keys(scores) as Array<keyof ProfileScores>)
    .map(profile => ({
      profileName: profile,
      score: scores[profile],
      percentage: 0
    }))
    .sort((a, b) => b.score - a.score);

  const maxPossibleScore = 50; // Adjust based on actual max
  sortedProfiles.forEach(profile => {
    profile.percentage = Math.round((profile.score / maxPossibleScore) * 100);
  });

  const primary = sortedProfiles[0];
  const secondary = sortedProfiles[1];

  // Determine profile label
  let profileLabel = "";
  let secondaryProfile: ProfileResult | null = null;

  if (primary.score < 18) {
    profileLabel = "Adaptive Communication Style";
  } else if (secondary.score >= 12 && (primary.score - secondary.score) <= 12) {
    secondaryProfile = secondary;
    if (primary.score - secondary.score <= 5) {
      profileLabel = `Balanced ${primary.profileName}-${secondary.profileName}`;
    } else {
      profileLabel = `${primary.profileName} with ${secondary.profileName} tendencies`;
    }
  } else {
    profileLabel = `Primary ${primary.profileName}`;
  }

  // Get profile description
  const profileData = profileDescriptions[primary.profileName] || profileDescriptions.secure;

  return {
    primary,
    secondary: secondaryProfile,
    profileLabel,
    description: profileData.corePattern,
    strengths: profileData.strengths,
    challenges: profileData.challenges,
    inConflict: profileData.inConflict,
    workingOn: profileData.workingOn,
    relationshipsWith: profileData.relationshipsWith,
    selectedGoals,
    totalScores: scores
  };
}

export function getProfileName(profile: keyof ProfileScores): string {
  return profileDescriptions[profile]?.name || profile;
}

export function getProfileEmoji(profile: keyof ProfileScores): string {
  return profileDescriptions[profile]?.emoji || "✨";
}
