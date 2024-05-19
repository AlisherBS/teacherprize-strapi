import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactsContacts extends Schema.Component {
  collectionName: 'components_contacts_contacts';
  info: {
    displayName: 'contacts';
    icon: 'hashtag';
  };
  attributes: {
    email2: Attribute.String;
    phone: Attribute.String;
    instagram: Attribute.String;
    facebook: Attribute.String;
    youtube: Attribute.String;
    other: Attribute.String;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
    icon: 'cog';
    description: '';
  };
  attributes: {
    position: Attribute.String;
    company: Attribute.String;
    description: Attribute.Text;
    workFrom: Attribute.String;
    workTo: Attribute.String;
  };
}

export interface PrizeApplication extends Schema.Component {
  collectionName: 'components_prize_applications';
  info: {
    displayName: 'application';
    description: '';
  };
  attributes: {
    answers: Attribute.JSON;
    votes: Attribute.Relation<
      'prize.application',
      'oneToMany',
      'api::vote.vote'
    >;
  };
}

export interface UserEducation extends Schema.Component {
  collectionName: 'components_user_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    institution: Attribute.String;
    profession: Attribute.String;
  };
}

export interface UserPersonal extends Schema.Component {
  collectionName: 'components_user_personals';
  info: {
    displayName: 'personal';
    icon: 'shield';
    description: '';
  };
  attributes: {
    dob: Attribute.Date;
    bio: Attribute.Text;
    region: Attribute.Enumeration<
      [
        'astanaCity',
        'almatyCity',
        'shymkentCity',
        'abay',
        'akmola',
        'aktobe',
        'almaty',
        'atyrau',
        'vko',
        'zhambyl',
        'zhetisu',
        'zko',
        'karagandy',
        'kostanay',
        'kyzylorda',
        'mangystau',
        'pavlodar',
        'sko',
        'turkestan',
        'ulytau'
      ]
    >;
    subject: Attribute.String;
    cityOrLocality: Attribute.String;
    qualification: Attribute.String;
    languages: Attribute.String;
  };
}

export interface VotingApplicants extends Schema.Component {
  collectionName: 'components_voting_applicants';
  info: {
    displayName: 'applicants';
    description: '';
  };
  attributes: {
    applicant: Attribute.Relation<
      'voting.applicants',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    votes: Attribute.Component<'voting.votes', true>;
    totalVote: Attribute.Decimal;
  };
}

export interface VotingDistribution extends Schema.Component {
  collectionName: 'components_voting_distributions';
  info: {
    displayName: 'distribution';
    description: '';
  };
  attributes: {
    judge: Attribute.Relation<
      'voting.distribution',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    applicants: Attribute.Relation<
      'voting.distribution',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    votedIds: Attribute.JSON;
  };
}

export interface VotingFirstStep extends Schema.Component {
  collectionName: 'components_voting_first_steps';
  info: {
    displayName: 'firstStep';
    description: '';
  };
  attributes: {
    isDistributed: Attribute.Boolean & Attribute.DefaultTo<false>;
    judges: Attribute.Relation<
      'voting.first-step',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    perAppVote: Attribute.Integer;
    isActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    distribution: Attribute.Component<'voting.distribution', true>;
  };
}

export interface VotingSecondStep extends Schema.Component {
  collectionName: 'components_voting_second_steps';
  info: {
    displayName: 'SecondStep';
    description: '';
  };
  attributes: {
    isDistributed: Attribute.Boolean & Attribute.DefaultTo<false>;
    isActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    perAppVote: Attribute.Integer;
    judges: Attribute.Relation<
      'voting.second-step',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    distribution: Attribute.Component<'voting.distribution', true>;
    topCount: Attribute.Integer & Attribute.DefaultTo<50>;
  };
}

export interface VotingVotes extends Schema.Component {
  collectionName: 'components_voting_votes';
  info: {
    displayName: 'votes';
    description: '';
  };
  attributes: {
    judge: Attribute.Relation<
      'voting.votes',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    criteria1: Attribute.Integer;
    criteria2: Attribute.Integer;
    criteria3: Attribute.Integer;
    criteria4: Attribute.Integer;
    criteria5: Attribute.Integer;
    criteria6: Attribute.Integer;
    averageVote: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contacts.contacts': ContactsContacts;
      'experience.experience': ExperienceExperience;
      'prize.application': PrizeApplication;
      'user.education': UserEducation;
      'user.personal': UserPersonal;
      'voting.applicants': VotingApplicants;
      'voting.distribution': VotingDistribution;
      'voting.first-step': VotingFirstStep;
      'voting.second-step': VotingSecondStep;
      'voting.votes': VotingVotes;
    }
  }
}
